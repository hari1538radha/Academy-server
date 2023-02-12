import mongoose from "mongoose";
const addQuizSchema = new mongoose.Schema({
  SlNo: {
      type: Number
  },
  Stem: {
      type: String
  },
  Image: {
      type: String,
      default: "NA",
  },
  distractor1: {
      type: String
  },
  distractor2: {
      type: String
  },
  distractor3: {
      type: String
  },
  distractor4: {
      type: String
  },
  Key: {
      type: Number
  },
  Hint: {
      type: String
  },
  TypeOfAssessment: {
      type: String
  },
  CourseTitle: {
      type: String
  },
  CognitiveLevel: {
      type: String
  },
  ConceptCode: {
      type: String
  },
  PurposeCode: {
      type: String
  },
  EntranceCode: {
      type: String
  }
  },
  { timestamps: true }
);
export const addQuizModel = new mongoose.model("AddQuiz", addQuizSchema);
