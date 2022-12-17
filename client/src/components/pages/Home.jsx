import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react'
import axios from 'axios'
import ListItemComp from '../ListItemComp'

const Home = () => {
  let images = ['https://images.unsplash.com/photo-1574870111867-089730e5a72b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80','https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',"https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80","https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80","https://images.unsplash.com/photo-1574068468668-a05a11f871da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80",]
  const [users, setUsers] = useState([])

  useEffect(()=>{
    const getUsers = async () =>{
      const {data} = await axios.get("https://bashobankapp.onrender.com/api/users")
      setUsers(data)
    }
    getUsers()
  
    return () => {
      // Cleanup
      setUsers([])
    }
    // eslint-disable-next-line
  },[])
  return (
   <>
   <div className="mt-2 mx-4">
  <Card>
    <div className="mb-4 flex items-center justify-between">
      <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
        Latest Users
      </h5>
    </div>
    <div className="flow-root">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {users.map((user,index)=><ListItemComp source={images[index]} key={user._id} user={user}/>)}
      </ul>
    </div>
  </Card>
</div>
   </>
  )
}

export default Home