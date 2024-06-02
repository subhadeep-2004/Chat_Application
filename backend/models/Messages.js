import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MessagesSchema = new Schema({

    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    recieverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message:{
        type: String,
        required: true,
    },
},{
    // this add two field createdAt , updatedAt
    timestamps:true 
})


const Messages = mongoose.model("Message", MessagesSchema);

export default Messages;
