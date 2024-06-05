import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import MessageContainer from '../../components/Messages/MessageContainer.jsx'


const isMobile = ()=>{
  return /Android|iPhone/i.test(navigator.userAgent);
}


const Home = () => {
  return (
    <div  className='flex sm:h-[500px] md:h-[450px] rounded-lg overflow-hidden bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
      {/* <h1>Home</h1> */}
      <SideBar></SideBar>
      <MessageContainer></MessageContainer>
      
    </div>
  )
}

export default Home
