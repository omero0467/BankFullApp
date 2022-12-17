import React, {useState} from 'react'
import axios from 'axios';
const TransferComp = ({setAccounts,setActionForm,setError}) => {
   const [transfer, setTransfer] = useState({ from: "", to:"",amount: "" });

   const handleTransferInputs = (event) => {
    setTransfer((prev) => {
        return { ...prev, [event.target.name]: event.target.value };
      });
    };

    const handleTransfer = async () => {
      if(transfer.amount>0){
        try {
          const  {data}  = await axios.put(
            "https://bashobankapp.onrender.com/api/accounts/transfer",
            transfer
            );
            setAccounts((prev)=>{
              return prev.map((account)=>{
                  if(account._id===data._id){
                      return {...account, cash:data.cash}
                  } return account
              })
             })
        } catch (error) {
          setError(error)
        }
        }
    };

  return (
    <div className='w-full px-4'>
        <div className='mb-2'>
             <label htmlFor="fromInput" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Account Sender ID</label>
             <small>required</small>
             <input onChange={handleTransferInputs} value={transfer.from} name='from' type="text" id="fromInput" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
         </div>
         <div className='mb-2'>
             <label htmlFor="toInput" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Account Recevir ID</label>
             <small>required</small>
             <input onChange={handleTransferInputs} value={transfer.to} name='to' type="text" id="toInput" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
         </div>
         <div className='mb-2'>
             <label htmlFor="amountInput" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
             <small>required</small>
             <input onChange={handleTransferInputs} value={transfer.amount} name='amount' type="number" id="amountInput" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
         </div>
         <div className="flex justify-center my-4 space-x-3 md:mt-6">
         <button onClick={()=>{handleTransfer()
           setActionForm('')}}  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Transfer
              </button>
              </div>
      </div>
  )
}

export default TransferComp