import React from 'react'
import Message from './Message.jsx'
import useGetMessage from '../../hooks/useGetMessage.js';
import MessageSkeleton from '../Skeleton/MessageSkeleton.jsx';
import { useConversation } from '../../zustand/useConversation.js';
import { useAuthContext } from '../../../context/AuthContext.jsx';
import { useEffect } from 'react';
import { useRef } from 'react';
import useListenMessage from '../../hooks/useListenMessage.js';


const Messages = () => {


  const { messages, loading } = useGetMessage();
 useListenMessage()


  // const messages= Messages.messages;

  // const allMessages = messages.messages;

  const { selectedConversation } = useConversation();
  const { authUser } = useAuthContext()
   

  const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);




  console.log( messages.length);
  console.log(typeof messages);
  return (
    <div className='Scroll px-4  overflow-auto'>
      {/* <Message ></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
//
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
         */}

  {!loading &&
				messages.length > 0 &&
				 messages.map((message) => (


          <div key={message._id} ref={lastMessageRef}>
				
						<Message key={message._id} message={message} />

            </div>
					
				))}


{!loading &&  messages.length === 0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}



      {loading && (
        <>
          <MessageSkeleton key={1} />
          <MessageSkeleton key={2} />
          <MessageSkeleton key={3} />
          <MessageSkeleton key={4} />
        </>
      )}


     
    </div>
  )
}

export default Messages
