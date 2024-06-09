import React from 'react'
// import useConverstaion from '../../hooks/useGetConversation'
import { useConversation } from '../../zustand/useConversation';
import { useSocketContext } from '../../../context/SocketContext';
const Conversation = ({conversation, key, lastIdx}) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    
    
    // for the selectedConversation id is same for a particular conversation make it as isSelected true
    const isSelected = selectedConversation?._id === conversation._id;
    
    
    const {onlineUsers} = useSocketContext()
    console.log(onlineUsers);

    const isOnline = onlineUsers.includes(conversation._id);
    
    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-orange-300 rounded p-2 py-1 cursor-pointer ${isSelected? 'bg-orange-300' : ' '} `}
            
            // this will set our selectedConversation 
            onClick={() => setSelectedConversation(conversation)}
            
            >
                <div className={`avatar ${isOnline ? "online":""}`}>
                    <div className='w-12 rounded-full border-solid border-2 border-orange-300 '>
                        <img src={conversation.profilePic} alt='user avatar' />
                    </div>
                </div>



				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold '> {conversation.fullName} </p>
						
					</div>
				</div>

            </div>


            {lastIdx? null :<div className='divider my-0 py-0 h-1' />
 }


        </>
    )
}

export default Conversation
