import { addQuizModel } from "../Schema/addQuizSchema.js";

export const quizData = (req, res) => {
  addQuizModel
    .find((err, data) => {
      if (err) {
        res.send(err);
      } else {
        return res.send({
          status: 200,
          message: "quiz found",
          data: data,
        })
      }
    })

};
