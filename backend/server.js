import express from 'express'
import dotenv from "dotenv";
import authRoutes from './routes/auth.routes.js';
import bodyParser from 'body-parser';
import connectDB from './db/connect.js';
import messagesRoutes from './routes/message.routes.js'
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.routes.js'
import { app,server } from './socket/socket.js';
import path from "path"
// git add .
// git commit  -m "1st part completed-backend"


// Mongodb details
// username:bhadrasubhadeep2004

dotenv.config()

// app.use(bodyParser.urlencoded({extended:true}));
// app.use("/api/auth",authRoutes)
const PORT = process.env.PORT ||5000;

const __dirname = path.resolve()


app.use(cookieParser());
app.use("/api/auth",authRoutes)
app.use("/api/messages",messagesRoutes)
app.use("/api/users",userRoutes)
app.use(express.static(path.join(__dirname, "/frontend/dist"    )))

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT,()=>{
    connectDB()
    console.log(`Server is running ${PORT}`)

})