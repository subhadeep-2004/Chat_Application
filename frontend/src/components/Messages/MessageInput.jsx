import React from 'react'
import { BsSend } from "react-icons/bs";
const MessageInput = () => {
  return (
    <form className='px-4 my-3' >
    <div className='w-full relative'>
        <input
            type='text'
            className='border text-sm rounded-lg block w-full p-2.5  bg-orange-200 border-orange-600 '
            placeholder='Send a message'
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
        />
        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
           {/* <div className='loading loading-spinner'></div> : <BsSend />} */}
           <BsSend></BsSend>
        </button>
    </div>
</form>
  )
}

export default MessageInput
