import React from 'react'
import Messages from './Messages'

const MobileMessage = () => {
  return (
    <div className='md:min-w-[450px] flex flex-col'>

    <div className='bg-slate-500 px-4 py-2 mb-2 flex justify-between'>
        

        <div>
        <span className='label-text'>To:</span>
        <span className='text-gray-900 font-bold'>Aditya</span>
        </div>
        
        <div>
        <span className='label-text'>From:</span>
        <span className='text-gray-900 font-bold'> Subhadeep </span>

        </div>
    </div>
    <Messages></Messages>

    </div>
  )
}

export default MobileMessage
