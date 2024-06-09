import React from 'react'
import toast from "react-hot-toast";
import { useConversation } from '../zustand/useConversation';
import {useState,useEffect} from 'react'
const useGetMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
    
	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {
				const res = await fetch(`/api/messages/${selectedConversation._id}`);
				const data = await res.json();

                console.log(data.messages);
				if (data.error) throw new Error(data.error);

                if(data.messages){
                    setMessages( data.messages );
                }else{
                    // when no messages exist for that conversation for that data.messages will be un defined
                    setMessages([])
                }
              
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

        // If there is any selected conversation fetch all the messages from that person
		if (selectedConversation._id) {
            getMessages()
        };
	}, [selectedConversation._id, setMessages]);

    // console.log(messages.length);
    return {loading,messages}

}

export default useGetMessage
