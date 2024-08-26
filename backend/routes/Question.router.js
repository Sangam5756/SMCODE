import express from "express"
const router = express.Router();

import { getAllQuestions, getCategory } from '../controller/getdata.controller.js';



router.get('/questions', getAllQuestions);
router.post('/category', getCategory);

export default router;
