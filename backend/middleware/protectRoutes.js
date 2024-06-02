import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
import Users from '../models/Users.js';
dotenv.config()
const protectRoutes = async (req, res,next)=>{
    try {
        const token = req.cookies.jwt;
        // console.log(token);
        console.log(token);
        if(!token){
            // unauthorized
           return res.status(401).json({error:"Un-Authorized please Sign Up or Log in"})
        }


        // Important

        const decode = jwt.verify(token, process.env.JWT_TOKEN)
        //  if the token is not decoded
        // decode is in form
        /*
        {
            // identifier is the user Id which is id for the senderId and the token belongs to the sender
            identifier: '665c5cd10c0897562b354b47',
            iat: 1717329105,
            exp: 1719921105
          }
          */
        console.log(decode);
        if(!decode){
            return res.status(401).json({error:"Invalid Token"})
        }

        // userId is defined in the token
        // console.log(decode.identifier);
        const user = await Users.findById(decode.identifier)


        // console.log(user);
        const userToReturn={...user.toJSON()};
        delete userToReturn.password;

        if(!user){
            return res.status(404).json({error:"No user Found"})
        }


        req.user = user
    //    return res.json(userToReturn)
    // When all re fine then move toh next i.e sendMessage
        next()        

        
    } catch (error) {
        console.log("In protect routes");
        console.log(error)
        res.status(500).json({error:"Internal server error"})
    }
}

export default protectRoutes