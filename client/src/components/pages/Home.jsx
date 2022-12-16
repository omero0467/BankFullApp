import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react'
import axios from 'axios'
import ListItemComp from '../ListItemComp'

const Home = () => {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    const getUsers = async () =>{
      const {data} = await axios.get("https://bashobankapp.onrender.com/api/users")
      setUsers(data)
    }
    getUsers()
    console.log(users);
  
    return () => {
      // Cleanup
      setUsers([])
    }
    // eslint-disable-next-line
  },[])
  return (
   <>
   <div className="">
  <Card>
    <div className="mb-4 flex items-center justify-between">
      <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
        Latest Users
      </h5>
      <a
        href="/"
        className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
      >
        View all
      </a>
    </div>
    <div className="flow-root">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {users.map((user)=><ListItemComp key={user._id} user={user}/>)}
      </ul>
    </div>
  </Card>
</div>
   </>
  )
}

export default Home