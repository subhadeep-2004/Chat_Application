import React from 'react'
import Conversation from './Conversation.jsx'
import { isMobile } from 'react-device-detect';
// import MobileMessage from '../Messages/MobileMessage.jsx';

// const isMobileDevice = () => {
//   return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
// };

const Touched = (event) => {
  console.log("Touched on a mobile device!", event);
  // return (<MobileMessage></MobileMessage>)
};
const handleTouchEnd = (event) => {
  // if (isMobile) {
    Touched(event);
  // }
};

const Conversations = () => {
  console.log(isMobile);
  return (
    <div className='py-2 flex flex-col overflow-auto'>

    <Conversation onTouchEnd={handleTouchEnd} ></Conversation>
    <Conversation onTouchEnd={handleTouchEnd}></Conversation>
    <Conversation onTouchEnd={handleTouchEnd}></Conversation>
    <Conversation onTouchEnd={handleTouchEnd}></Conversation>

    </div>
  )
}

export default Conversations
