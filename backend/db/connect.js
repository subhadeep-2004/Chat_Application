import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.connection_String);
        console.log("Connected to the data-base");

    }catch(error){
        console.log("Failed to connect!",error.message);
    }
}

export default connectDB