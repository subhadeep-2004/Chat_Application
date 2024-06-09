import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
import { isMobile } from 'react-device-detect';
import { useAuthContext } from '../../../context/AuthContext';
import { useConversation } from '../../zustand/useConversation';
import { useEffect } from 'react';
const MessageContainer = () => {
    // const { loading, login } = useLogin();
    
    const noChatSelected= true;

    const { selectedConversation, setSelectedConversation } = useConversation();
    const {authUser} =  useAuthContext();
    useEffect( () => {
        // Cleanup function to reset selectedConversation on unmount
        return () => {
            setSelectedConversation(null);
        };
    },[setSelectedConversation] )


    console.log(authUser.userName);

    return (

        <div className='md:min-w-[450px] flex flex-col justify-between'>
            {

                !selectedConversation ? <NoChatSelected authUser={authUser}/> :  (
                    <>
                    <div className='bg-slate-500 px-4 py-2 mb-2 flex justify-between'>
                        
        
                        <div>
                        <span className='label-text'>To: </span>
                        <span className='text-gray-900 font-bold'> {selectedConversation.fullName} </span>
                        </div>
                        
                        <div>
                        <span className='label-text'>From: </span>
                        <span className='text-gray-900 font-bold'> 
                           {authUser.fullName}
                            
                            </span>
        
                        </div>
                    </div>
        
        
                    <Messages />
        
                    <MessageInput></MessageInput>
        
                    </>


                )

            }
         


        </div>
    )
}


const NoChatSelected = ({authUser}) => {
	return (
		<div className='flex bg-customYellow backdrop-blur-2px items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl  font-semibold flex flex-col items-center gap-2'>
				<p>Welcome {authUser.fullName} 👋</p>
				<p>Select a chat to start contacting</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};


export default MessageContainer
