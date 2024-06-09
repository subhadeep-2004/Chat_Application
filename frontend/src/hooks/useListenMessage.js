
import { useEffect } from "react";
import { useSocketContext } from "../../context/SocketContext";
import { useConversation } from "../zustand/useConversation";
import notificationSound from "../assets/sound/notification.mp3";
const useListenMessage = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages } = useConversation();

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			newMessage.shouldShake = true;
			const sound = new Audio(notificationSound);
			sound.play();
			setMessages([...messages, newMessage]);
		});

        // this line is important because if we donot give it sound will be played mutliple time depending o the number of messages 

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages]);
};
export default useListenMessage;