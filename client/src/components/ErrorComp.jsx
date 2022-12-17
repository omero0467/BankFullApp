import { Button, Modal } from 'flowbite-react'
import React, { useState } from 'react'
import { HiOutlineExclamationCircle } from 'react-icons/hi'

function ErrorComp({message}) {
    const [modalDisplay, setModalDisplay] = useState(true)
    function onClick (){
    setModalDisplay(false)
    }
  return (
    <React.Fragment>
  <Modal
    show={modalDisplay}
    size="md"
    popup={true}
    onClose={onClick}
  >
    <Modal.Header />
    <Modal.Body>
      <div className="text-center">
        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
          {message}
        </h3>
        <div className="flex justify-center gap-4">
          <Button
            color="failure"
            onClick={onClick}
          >
            Okay
          </Button>
        </div>
      </div>
    </Modal.Body>
  </Modal>
</React.Fragment>
  )
}

export default ErrorComp