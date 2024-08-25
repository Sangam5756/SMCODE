import express from "express"
const router = express.Router();

import { getAllQuestions } from '../controller/getdata.controller.js';



router.get('/questions', getAllQuestions);

export default router;
