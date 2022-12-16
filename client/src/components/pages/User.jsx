import React,{useEffect,useState} from 'react'
import { useParams,Link } from 'react-router-dom'
import { Spinner } from 'flowbite-react'
import axios from 'axios'
const User = () => {
   
    const fetchAccountsData = async (accid) => {

        const {data} = await axios.get(`https://bashobankapp.onrender.com/api/accounts/${accid}`)
        setAccounts(data)
        console.log(data);
     }

   const  {id} = useParams()
   const [user, setUser]= useState({})
   const [accounts, setAccounts]= useState([])
   const [isLoading, setisLoading] = useState(false)
   useEffect(() => {
      const fetchUsersData = async () => {
         setisLoading(true)
         const {data} = await axios.get(`https://bashobankapp.onrender.com/api/users/${id}`)
         setUser(data)
         data.accounts.forEach(id => {
            fetchAccountsData(id)
         });
         setisLoading(false)
      }
      fetchUsersData()
      return () => {
         setUser(null)
      }
    // eslint-disable-next-line 
   },[])
   

   
  return (

      <div className="flex justify-center pt-4">
         { isLoading && <div className="h-40 flex items-end" > <Spinner className='w-20 h-20'/>   </div>}
         {user &&
         <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-900  ">
            <div className="flex justify-end px-4 pt-4">
               {/* <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                     <span className="sr-only">Open dropdown</span>
                     <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
               </button> */}
               {/* <!-- Dropdown menu --> */}
               <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
                     <ul className="py-1" aria-labelledby="dropdownButton">
                     <li>
                        <Link to={"/"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</Link>
                     </li>
                     <li>
                        <Link href={"/"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</Link>
                     </li>
                     <li>
                        <Link href={"/"} className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</Link>
                     </li>
                     </ul>
               </div>
            </div>
            <div className="flex flex-col items-center pb-10">
               <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src='https://flowbite.com/docs/images/people/profile-picture-1.jpg' alt="Bonnie "/>
               <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.name + ' '+ user.lastName}</h5>
               <span className="text-sm text-gray-500 dark:text-gray-400">Age: {user.age}</span> <div>Accounts: {accounts.cash}</div>
               <div className="flex mt-4 space-x-3 md:mt-6">
                     <button  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Deposit</button>
                     <button  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Withdraw</button>
                     <button  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Transfer</button>
               </div>
            </div>
         </div>
         }
      </div>
  )
}

export default User