import { Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Api } from "../api/Api";
function ListItemComp({ user, source }) {
  const [isLoading, setisLoading] = useState(false);
  const [balance, setBalance] = useState("");
  useEffect(() => {
    if (user.accounts.length > 0) {
      getBalance();
    } else {
      setBalance("No Accounts");
    }
    async function getBalance() {
      try {
        setisLoading(true);
        const { data } = await Api.get(`/accounts/${user.accounts[0]}`);
        setBalance(data.cash);
        setisLoading(false);
      } catch (error) {
        console.log(error);
        setisLoading(false);
        setBalance("No Info");
      }
    }
  }, [user]);
  return (
    <>
      <li className="py-3 sm:py-4">
        <div className="flex items-center space-x-4">
          <div className="shrink-0">
            <img
              className="h-8 w-8 rounded-full"
              src={source}
              alt={user.name}
            />
          </div>
          <div className="min-w-0 flex-1">
            <Link
              to={`/user/${user._id}`}
              className="truncate text-sm font-medium text-gray-900 dark:text-white"
            >
              {user.name} {user.lastName}
            </Link>
            <p className="truncate text-sm text-gray-500 dark:text-gray-400">
              User ID: {user._id}
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {balance !== "No Accounts" ? `$${balance}` : balance}
            {isLoading && <Spinner />}
          </div>
        </div>
      </li>
    </>
  );
}

export default ListItemComp;
