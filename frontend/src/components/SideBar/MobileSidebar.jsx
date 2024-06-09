import React from 'react'
import SearchInput from './SearchInput.jsx'
import Conversations from './Conversations.jsx'
import LogoutButton from './LogoutButton.jsx'
import { useConversation } from '../../zustand/useConversation.js'
import MobileMessage from '../Messages/MobileMessage.jsx'
import { isMobile } from 'react-device-detect';




const MobileSidebar = ()=>{


    const { selectedConversation, setSelectedConversation } = useConversation();
    return  (
        <>
        {selectedConversation ? (
            <MobileMessage />
        ) : (
            <div className='flex sm:h-[500px] md:h-[450px] rounded-lg overflow-hidden bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
                <div className='border-r border-slate-500 p-4 flex flex-col min-h-[600px] max-h-[650px]'>
                    <SearchInput />
                    <div className='divider px-3'></div>
                    <Conversations />
                    <LogoutButton />
                </div>
            </div>
        )}
    </>
      )
}


export default MobileSidebar