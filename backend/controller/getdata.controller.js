import QuestionSchema from "../models/problemModel.js";


export const getAllQuestions = async (req, res) => {
  try {
    const questions = await QuestionSchema.find({});
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching questions", error });
  }
};
