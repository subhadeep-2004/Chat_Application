import React from 'react'
import Conversation from './Conversation.jsx'
import { isMobile } from 'react-device-detect';
import { useState } from 'react';
import useGetConverstaion from '../../hooks/useGetConversation.jsx';
// import MobileMessage from '../Messages/MobileMessage.jsx';

// const isMobileDevice = () => {
//   return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
// };
import ConversationSkeleton from '../Skeleton/ConversationSkeleton.jsx';

const Conversations = () => {





  const [showMobileMessage, setShowMobileMessage] = useState(false);

  const Touched = (event) => {

    if(isMobile){
    console.log("Touched on a mobile device!", event);
    // return (<MobileMessage></MobileMessage>)
    setShowMobileMessage(true);

    }
  };
  const handleTouchEnd = (event) => {
    // if (isMobile) {
      Touched(event);
    // }
  };
  // console.log(isMobile);

  const{loading, conversations} =useGetConverstaion();

  console.log(conversations);

  return (
    <div className='py-2 flex flex-col overflow-auto'>

    {/* <Conversation onTouchEnd={handleTouchEnd} showMobileMessage ={showMobileMessage} ></Conversation>
    <Conversation onTouchEnd={handleTouchEnd} ></Conversation>
    <Conversation onTouchEnd={handleTouchEnd} ></Conversation>
    <Conversation onTouchEnd={handleTouchEnd} ></Conversation> */}


{conversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					// emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length - 1}
				/>
			))}


{loading ? <ConversationSkeleton/> : null} 





    </div>
  )
}

export default Conversations
