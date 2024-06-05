import React from 'react'

const Message = () => {
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Profile Pic" src="https://avatar.iran.liara.run/public/girl" />
                </div>
            </div>
            <div className="chat-bubble">Hi bro what wrong</div>
            <div className="chat-footer opacity-50">
                12:00pm
            </div>
        </div>
    )
}

export default Message
