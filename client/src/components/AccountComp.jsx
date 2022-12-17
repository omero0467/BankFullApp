import { Accordion } from 'flowbite-react'
import React from 'react'

function AccountComp({account}) {
  return (
    <Accordion alwaysOpen={true} className='mx-2'>
  <Accordion.Panel>
    <Accordion.Title>
      Account Number: {account._id}
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      Cash: ${account.cash}
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Credit: ${account.credit}
      </p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      Acc Number: {account._id}
      </p>
    </Accordion.Content>
  </Accordion.Panel>
</Accordion>
  )
}

export default AccountComp