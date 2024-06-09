import React from 'react'
import Messages from './Messages.jsx'
import MessageInput from './MessageInput.jsx'
import { useAuthContext } from '../../../context/AuthContext';
import { FaArrowCircleLeft } from "react-icons/fa";

import { useConversation } from '../../zustand/useConversation.js';

const MobileMessage = () => {
// 
    const { messages,selectedConversation, setSelectedConversation } = useConversation();
    const {authUser} =  useAuthContext();

    const handleBack=()=>{
        setSelectedConversation(null);
    }

    return (

        // <div className='sm:h-[500px] md:h-[450px] rounded-lg overflow-hidden bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>

        <div className='min-h-[600px] max-h-[650px] w-[350px] flex rounded-lg overflow-hidden bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
            <div className='w-[450px] flex flex-col'>

                <div className='bg-slate-500 px-4 py-2 mb-2 flex justify-between'>
                    <div>
                    <FaArrowCircleLeft  size={25} onClick={handleBack}/>
                    </div>
                    <div>
                        <span className='label-text'>To:</span>
                        <span className='text-gray-900 font-bold'>
                            {selectedConversation.fullName}
                            
                            </span>
                    </div>

                    <div>
                        <span className='label-text'>From:</span>
                        <span className='text-gray-900 font-bold'>
                        {authUser.fullName}
                            </span>
                    </div>
                </div>

                {/* Messages container with flex-grow */}

                     {/* <div className='flex-1 overflow-y-auto scrolling-touch'> */}
                    <Messages />
                    {/* </div> */}
                {/* Message input area */}
                <div className='mt-auto'>
                    <MessageInput />
                </div>
            </div>


        </div>
    )
}

export default MobileMessage
