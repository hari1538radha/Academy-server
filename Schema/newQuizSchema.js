import mongoose from "mongoose";

const newQuizSchema = new mongoose.Schema({
    SlNo: {
        type: Number
    },
    stem: {
        type: String
    },
    Image: {
        type: String
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
    "Cognitive-Level": {
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
})

export const AddNewQuiz = new mongoose.model("new-quiz", newQuizSchema)
