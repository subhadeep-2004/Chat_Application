import express from 'express'
import bodyParser from 'body-parser';
import protectRoutes from '../middleware/protectRoutes.js';
import { sendMessage,getMessage } from '../controllers/message.js';
const router = express.Router();

router.use(bodyParser.urlencoded({extended:true}));
// for both key value and json format
router.use(express.json());

// protect routes ensures that people without the login or signup noone can send.
router.post("/send/:id",protectRoutes ,sendMessage  )
router.get("/:id",protectRoutes ,getMessage  )




export default router