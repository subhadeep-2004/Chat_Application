import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { BsSend } from "react-icons/bs";
import useSendMessage from '../../hooks/useSendMessage';
import { set } from 'mongoose';
const MessageInput =  () => {
  const [message,setMessage] = useState('');
  const { loading , sendMessage} = useSendMessage();

  // const loading = false; 

  const handleSubmit = async(e)=>{

    e.preventDefault();
    if( !message ){

      toast.error("No message found");
      return;
    }

    await sendMessage( message );
    setMessage('');
    
  }

  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
    <div className='w-full relative'>
        <input
            type='text'
            className='border text-sm rounded-lg block w-full p-2.5  bg-orange-200 border-orange-600 '
            placeholder='Send a message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        />
        <button type='submit' className='absolute inset-y-0 end-0 flex items-center p-3'>
        
          {loading ? <span className='loading loading-spinner mx-auto'></span> :  <BsSend />} 

           {/* <BsSend></BsSend> */}
        </button>
    </div>
</form>
  )
}

export default MessageInput
