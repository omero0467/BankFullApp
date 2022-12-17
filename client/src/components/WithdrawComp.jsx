import React,{useState} from 'react'
import axios from 'axios'
const WithdrawComp = ({setAccounts,setActionForm,setError}) => {
   const [withdraw, setWithdraw] = useState({ _id: "", amount: "" });

   const handleWithdrawInputs = (event) => {
      setWithdraw((prev) => {
        return { ...prev, [event.target.name]: event.target.value };
      });
    };
  
    const withdrawFromAccount = async () => {
      try {
         if(withdraw.amount>0){
           const { data } = await axios.put(
             "https://bashobankapp.onrender.com/api/accounts/withdraw",
             withdraw
             );
             console.log(data)
             setAccounts((prev)=>{
               return prev.map((account)=>{
                   if(account._id===data._id){
                       return {...account, cash:data.cash}
                   } return account
               })
              })
           }
      } catch (error) {
         setError(error)
      }
    };

  return (
    <div className='w-full px-4'>
         <div className='mb-2'>
             <label htmlFor="idInput" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account ID</label>
             <small>required</small>
             <input onChange={handleWithdrawInputs} value={withdraw._id} name='_id' type="text" id="idInput" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
         </div>
         <div className='mb-2'>
             <label htmlFor="amountInput" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
             <small>required</small>
             <input onChange={handleWithdrawInputs} value={withdraw.amount} name='amount' type="number" id="amountInput" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
         </div>
         <div className="flex justify-center my-4 space-x-3 md:mt-6">
         <button onClick={()=>{ withdrawFromAccount()
           setActionForm('')}}  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Withdraw
              </button>
              </div>
      </div>
  )
}

export default WithdrawComp