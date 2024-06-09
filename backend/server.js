import express from 'express'
import dotenv from "dotenv";
import authRoutes from './routes/auth.routes.js';
import bodyParser from 'body-parser';
import connectDB from './db/connect.js';
import messagesRoutes from './routes/message.routes.js'
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.routes.js'
import { app,server } from './socket/socket.js';
// git add .
// git commit  -m "1st part completed-backend"


// Mongodb details
// username:bhadrasubhadeep2004
//  pwd :Xiy2E4I7eq7CaoVc
// connection_String :mongodb+srv://bhadrasubhadeep2004:Xiy2E4I7eq7CaoVc@cluster0.mzjlzw1.mongodb.net/chatAppDB?retryWrites=true&w=majority&appName=Cluster0
dotenv.config()

// app.use(bodyParser.urlencoded({extended:true}));
// app.use("/api/auth",authRoutes)
const PORT = process.env.PORT ||5000;


// app.get("/",(req,res)=>{
//     res.send("Hello Wawdwdorlds")
// })
app.use(cookieParser());
app.use("/api/auth",authRoutes)
app.use("/api/messages",messagesRoutes)
app.use("/api/users",userRoutes)

server.listen(PORT,()=>{
    connectDB()
    console.log(`Server is running ${PORT}`)

})