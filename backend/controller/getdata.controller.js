import QuestionSchema from "../models/problemModel.js";

export const getAllQuestions = async (req, res) => {
  try {
    const questions = await QuestionSchema.find({});
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching questions", error });
  }
};

export const getCategory = async (req, res) => {
  try {
    const { category } = req.body;
    


    const questions = await QuestionSchema.find({category :category}).populate("test_cases","solutions");

    
    res.status(200).json({
        data:questions,
        message:"data Fetch SuccessFully",
        success:true
      }
    
    );
  } catch (error) {
    res.status(500).json({ message: "Error fetching questions", error });
  }
};
