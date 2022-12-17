import { Alert } from 'flowbite-react'
import React from 'react'
import {HiInformationCircle,HiEye} from 'react-icons/hi'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div className='my-4 flex items-center justify-center '><Alert
    color="failure"
    additionalContent={<React.Fragment><div className="mt-2 mb-4 text-m text-red-700 dark:text-red-800">Unfortunetly we were unable to find the requested page</div><div className="flex"><button type="button" className="mr-2 inline-flex items-center rounded-lg bg-red-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-800 dark:hover:bg-red-900"><HiEye className="-ml-0.5 mr-2 h-4 w-4" />View more</button><Link to={''} type="button" className="rounded-lg border border-red-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-red-700 hover:bg-red-800 hover:text-white focus:ring-4 focus:ring-red-300 dark:border-red-800 dark:text-red-800 dark:hover:text-white">Dismiss</Link></div></React.Fragment>}
    icon={HiInformationCircle}
  >
    <h3 className="text-lg font-medium text-red-700 dark:text-red-800">
  404 Page Not Found!
      </h3>
  </Alert></div>
  )
}

export default ErrorPage