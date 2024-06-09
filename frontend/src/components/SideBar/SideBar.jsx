import React from 'react'
import SearchInput from './SearchInput.jsx'
import Conversations from './Conversations.jsx'
import LogoutButton from './LogoutButton.jsx'
import { isMobile } from 'react-device-detect';
import { useConversation } from '../../zustand/useConversation.js';
const SideBar = () => {

  // console.log(isMobile);
  const { selectedConversation, setSelectedConversation } = useConversation();
  return (

    
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <SearchInput></SearchInput>
      <div className='divider px-3'></div>
      <Conversations />

      <LogoutButton></LogoutButton>
    </div>
  )
}

export default SideBar
