import React from 'react'

const Conversation = ({onTouchEnd}) => {
    return (





        <>
            <div  onTouchEnd={onTouchEnd} className='flex gap-2 items-center hover:bg-orange-300 rounded p-2 py-1 cursor-pointer'>
                <div className='avatar online'>
                    <div className='w-12 rounded-full border-solid border-2 border-orange-300 '>
                        <img src="https://avatar.iran.liara.run/public/girl?username=test" alt='user avatar' />
                    </div>
                </div>



				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold '>Subhadeep</p>
						<span className='text-xl'>😊</span>
					</div>
				</div>

            </div>
         <div className='divider my-0 py-0 h-1' />


        </>
    )
}

export default Conversation
