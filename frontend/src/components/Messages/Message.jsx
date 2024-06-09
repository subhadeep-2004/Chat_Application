import React from 'react'

import useGetMessage from '../../hooks/useGetMessage.js';
import MessageSkeleton from '../Skeleton/MessageSkeleton.jsx';
import { useConversation } from '../../zustand/useConversation.js';
import { useAuthContext } from '../../../context/AuthContext.jsx';

export function extractTime(dateString) {
	const date = new Date(dateString);
	const hours = padZero(date.getHours());
	const minutes = padZero(date.getMinutes());
	return `${hours}:${minutes}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
	return number.toString().padStart(2, "0");
}

const Message = ({message}) => {

    
    const { selectedConversation } = useConversation();

    const { authUser } = useAuthContext()
    


    const fromMe = message.senderId === authUser._id;
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
    const bubbleBgColor = fromMe ? "bg-orange-400" : "";

    const textColor = fromMe ? "text-black": "text-white";

    const formattedTime = extractTime(message.createdAt) 
    const shakeClass= message.shouldShake ? "shake" :" "



    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Profile Pic" src={profilePic}/>
                </div>
            </div>
            <div className={`chat-bubble ${bubbleBgColor}  ${textColor} ${shakeClass} `  }     >{message.message}</div>
            <div className="chat-footer opacity-50">
               {formattedTime}
            </div>
        </div>
    )
}

export default Message
