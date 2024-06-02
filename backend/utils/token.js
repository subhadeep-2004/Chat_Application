import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
dotenv.config()

const getToken = async (userId, res )=>{

    const val = process.env.JWT_TOKEN;

    //jwt identifier is the user Id
    const token= jwt.sign({identifier : userId},val,{
            expiresIn: '30d'
        })

    res.cookie("jwt",token,{
        maxAge: 30 * 24 * 60 *  60 * 1000, //30 days 24 hr 
        httpOnly: true, // prevents XSS attacks
        sameSite: "strict",
        secure: process.env.NODE_ENV!='development'
    })
};

export default getToken;
