import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Spinner } from "flowbite-react";
import axios from "axios";
import AccountComp from "../AccountComp";
import DepositComp from "../DepositComp";
import WithdrawComp from "../WithdrawComp";
import TransferComp from "../TransferComp";
import ErrorComp from "../ErrorComp";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [formDisplay, setFormDisplay] = useState(false);
  const [actionForm, setActionForm] = useState("");
  const [error, setError] = useState("");

  const fetchAccountsData = async (accid) => {
    const { data } = await axios.get(
      `https://bashobankapp.onrender.com/api/accounts/${accid}`
    );
    setAccounts((prev)=>[...prev,data]);
  };

  function handleAction(name) {
    switch (name) {
      case "Deposit":
        setActionForm(
          <DepositComp setError={setError} setAccounts={setAccounts}  setActionForm={setActionForm}/>
        );
        break;
      case "Withdraw":
        setActionForm(
          <WithdrawComp setError={setError} setAccounts={setAccounts}  setActionForm={setActionForm}/>
        );
        break;
      case "Transfer":
        setActionForm(
          <TransferComp setError={setError} setAccounts={setAccounts}  setActionForm={setActionForm}/>
        );
        break;
      default:
        setActionForm("");
        break;
    }
    setFormDisplay((prev) => !prev);
  }



  useEffect(() => {
    const fetchUsersData = async () => {
      setisLoading(true);
      const { data } = await axios.get(
        `https://bashobankapp.onrender.com/api/users/${id}`
      );
      setUser(data);
      data.accounts.forEach((id) => {
        fetchAccountsData(id);
      });
      setisLoading(false);
    };
    fetchUsersData();
    return () => {
      setUser(null);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex justify-center pt-4">
      {isLoading && (
        <div className="h-40 w-40 flex justify-center  items-end">
          {" "}
          <Spinner size={"xl"} className="w-30 h-30" />{" "}
        </div>
      )}
      {user && (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-900  ">
          <div className="flex justify-end px-4 pt-4">
            <div
              id="dropdown"
              className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
            >
              <ul className="py-1" aria-labelledby="dropdownButton">
                <li>
                  <Link
                    to={"/"}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Edit
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Export Data
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Delete
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
              alt="Bonnie "
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {user.name + " " + user.lastName}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Age: {user.age}
            </span>{" "}
            <div className="mb-2">Accounts: {accounts.cash}</div>
            {accounts &&
              accounts.map((account) => (
                <AccountComp key={account._id} account={account} />
              ))}
            <div className="flex my-4 space-x-3 md:mt-6">
              <button
                onClick={({ target: { name } }) => {
                  handleAction(name);
                }}
                name="Deposit"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Deposit
              </button>
              <button
                onClick={({ target: { name } }) => {
                  handleAction(name);
                }}
                name="Withdraw"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              >
                Withdraw
              </button>
              <button
                onClick={({ target: { name } }) => {
                  handleAction(name);
                }}
                name="Transfer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              >
                Transfer
              </button>
            </div>
            {/* Bashir Form Here Replace Fragment */}
            {formDisplay && actionForm}
            {error&&<ErrorComp message={error.response.data}/>}
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
