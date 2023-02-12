import { addQuizModel } from "../Schema/addQuizSchema.js";
import GenerateSchema from 'generate-schema';
import mongoose from "mongoose" ;

export const addQuiz = (req, res) => {

  let schema = GenerateSchema.json("addQuiz", req.body[0])
  const QuizSchemaModel = mongoose.model("addQuiz", schema.properties);

  QuizSchemaModel.insertMany(req.body)
  .then(function (response) {
    console.log("Quiz data inserted");
    return res.send("data inserted")
  })
  .catch(function (error) {
    console.log(error); // Failure
});

  // let { SlNo,
  //         Stem,
  //         Image,
  //         distractor1,
  //         distractor2,
  //         distractor3,
  //         distractor4,
  //         Key,
  //         Hint,
  //         TypeOfAssessment,
  //         CourseTitle,
  //         CognitiveLevel,
  //         ConceptCode,
  //         PurposeCode,
  //         EntranceCode } = req.body;
  //         console.log(req.body);
  //         SlNo = parseInt(SlNo,10)
  //         Key = parseInt(Key,10)

  // if ((Stem && distractor1 && distractor2)) {
  //   res.status(200).send({
  //     message: "Please enter the questions and answer",
  //   });
  // } else {
  //   // let ImageInfo = {
  //   //   data: fs.readFileSync("QuizQuestionImage/" + req.file.filename),
  //   //   contentType: "image/png",
  //   // }
  //   const addQuizData = new addQuizModel({
  //     SlNo: SlNo,
  //     Key: Key,
  //     Stem,
  //     Image,
  //     distractor1,
  //     distractor2,
  //     distractor3,
  //     distractor4,
  //     Hint,
  //     TypeOfAssessment,
  //     CourseTitle,
  //     CognitiveLevel,
  //     ConceptCode,
  //     PurposeCode,
  //     EntranceCode
  //   });

  //   console.log(addQuizData);

  //   addQuizData.save((err, data) => {
  //     console.log(data);
  //     if (err) {
  //       return res.send(err);
  //     } else {
  //       return res.status(200).send({
  //         message: "quiz added successfully!!",
  //         data: data,
  //       });
  //     }
  //   });
  // }
};

