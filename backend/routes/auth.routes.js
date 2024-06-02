import express from 'express'
import bodyParser from 'body-parser';
import { signUp,logOut,loginUser } from '../controllers/auth.js';
const router = express.Router();

//This is for getting the key and value pairs from the user
router.use(bodyParser.urlencoded({extended:true}));

// This is for accepting the json format if it required like in postman
router.use(express.json());

router.post("/login",loginUser)
router.post("/signUp",signUp);
router.post("/logout",logOut);


export default router;