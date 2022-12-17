import React, {useState} from "react";

import {Api} from "../../api/Api";
import ErrorComp from "../ErrorComp";
const Account = () => {
   const [acc, setAcc] = useState({userId: "", cash: "", credit: ""});
   const [error, setError] = useState("");

   const handleAccountInputs = (event) => {
      setAcc((prev) => {
         return {...prev, [event.target.name]: event.target.value};
      });
   };
   const handleclick = () => setAcc({userId: "", cash: "", credit: ""});

   const createAccount = async () => {
      try {
         if (acc.userId) {
            const {status} = await Api.post("/accounts", acc);
            if (status === 201) {
               setError("Account Created Successfully");
            }
         }
      } catch (error) {
         setError(error.response.data);
      }
   };

   return (
      <div className="flex justify-center pt-4">
         {error && <ErrorComp message={error} />}
         <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-900  ">
            <div className="flex flex-col items-center pb-10">
               <div className="w-full px-4">
                  <div className="mb-2">
                     <label
                        htmlFor="userIdInput"
                        className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                     >
                        User ID
                     </label>
                     <small>required</small>
                     <input
                        onChange={handleAccountInputs}
                        value={acc.userId}
                        name="userId"
                        type="text"
                        id="userIdInput"
                        className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     />
                  </div>
                  <div className="mb-2">
                     <label
                        htmlFor="cashInput"
                        className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                     >
                        Cash
                     </label>
                     <input
                        onChange={handleAccountInputs}
                        value={acc.cash}
                        name="cash"
                        type="number"
                        id="cashInput"
                        className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     />
                  </div>
                  <div className="mb-2">
                     <label
                        htmlFor="creditInput"
                        className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                     >
                        Credit
                     </label>
                     <input
                        onChange={handleAccountInputs}
                        value={acc.credit}
                        name="credit"
                        type="number"
                        id="creditInput"
                        className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     />
                  </div>
                  <div className="flex justify-center my-4 space-x-3 md:mt-6">
                     <button
                        onClick={() => {
                           createAccount();
                           handleclick();
                        }}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                     >
                        Create Account
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Account;
