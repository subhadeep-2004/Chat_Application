import Conversations from "../models/Conversations.js";
import Messages from "../models/Messages.js";

export const sendMessage =async (req, res)=>{

    try {

        const {message} = req.body;
        // rename the id to recieverId
        const { id:recieverId } = req.params;
        // us id
        const senderId = req.user._id;
       let conversation = await Conversations.findOne(
            {participants: {$all: [senderId,recieverId]}}
        )

        if(!conversation){
            // message for the first time
            conversation = await Conversations.create({
                participants:[senderId,recieverId],
                // message:[] already by default in model in model

            })
        }

        const newMessage = await Messages.create({
            senderId:senderId,
            recieverId: recieverId,
            message : message
        })
        // console.log(conversation);
        if( newMessage ){
            conversation.messages.push(newMessage._id);
           
        }


        // Code for the socket.io


        await newMessage.save()
        await conversation.save();
        return res.status(201).json(newMessage);


        res.send(req.params.id);
    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
    }

}

export const getMessage = async (req, res)=>{


    try {
        const { id:userToChatId } = req.params;
        const senderId=req.user._id;
        // console.log("userToChat", userToChatId);
        // console.log(,recieverId);
        let conversation = await Conversations.findOne(
            {participants: {$all: [senderId, userToChatId]}}
        ).populate("messages")
        
        if(!conversation){
            return res.status(200).json([]);
        }

        const messages = conversation
        res.send(messages);

    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
    }

}