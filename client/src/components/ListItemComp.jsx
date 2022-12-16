import axios from 'axios'
import { Spinner } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function ListItemComp({user}) {
    const [isLoading, setisLoading] = useState(true)
    const [balance, setBalance] = useState('')
    useEffect(()=>{
        async function getBalance (){
            const{data} = await axios.get(`https://bashobankapp.onrender.com/api/accounts/${user.accounts[0]}`)
            setBalance(data.cash)
            setisLoading(false)
        }
        if (user.accounts.length>0){getBalance()
        }
    },[user])
  return (
    <>
     <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            <div className="shrink-0">
              <img
                className="h-8 w-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                alt={user.name}
              />
            </div>
            <div className="min-w-0 flex-1">
              <Link to={`/user/${user._id}`} className="truncate text-sm font-medium text-gray-900 dark:text-white">
                {user.name} {user.lastName}
              </Link >
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                email@windster.com
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              {isLoading&&balance?<Spinner/>:`$${balance}`}
            </div>
          </div>
        </li>
    </>
  )
}

export default ListItemComp