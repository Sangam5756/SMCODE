import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  link: { type: String, required: true },
  title: { type: String, required: true },
  difficulty: { type: String, required: true },
  problem_description: { type: String, required: true },
  category: { type: String, required: true }, // Added category field
  test_cases: [
    {
      input: { type: String, required: true },
      expected_output: { type: String, required: true },
      explanation: { type: String, required: true },
    },
  ],
  solutions: [
    {
      type: { type: String, required: true },
      code: { type: String, required: true },
      time_complexity: { type: String, required: true },
      space_complexity: { type: String, required: true },
      brief_explanation: { type: String, required: true },
    },
  ],
});

const Question = mongoose.model("Question", questionSchema);
export default Question;
