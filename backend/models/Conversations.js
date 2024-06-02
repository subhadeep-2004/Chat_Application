import mongoose from "mongoose";


const Schema = mongoose.Schema;

const ConversationsSchema = new Schema({
    participants:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
    ],
    messages:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Message",
        default:[]
    }
]


}, {timestamps:true})

const Conversations = mongoose.model("Conversation", ConversationsSchema);

export default Conversations;

