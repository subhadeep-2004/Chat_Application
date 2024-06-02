import express from 'express'
import bodyParser from 'body-parser';
import protectRoutes from '../middleware/protectRoutes.js';
import { getUsersSideBar } from '../controllers/usersSideBar.js';

const router = express.Router();

router.use(bodyParser.urlencoded({extended:true}));
// for both key value and json format
router.use(express.json());

router.get("/",protectRoutes,getUsersSideBar)


export default router;