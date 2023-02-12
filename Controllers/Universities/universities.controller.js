import { excelToJsonModel } from "../../Schema/excelToJson.js";
import GenerateSchema from "generate-schema";
import mongoose from "mongoose";

const postUniversities = (req, res) => {
  let schema = GenerateSchema.json("excelToJson", req.body[0]);
  const universitiesModel = mongoose.model("excelToJson", schema.properties);

  universitiesModel
    .insertMany(req.body)
    .then(function (response) {
      console.log("Data inserted"); // Success
      return res.send("Data inserted");
    })
    .catch(function (error) {
      console.log(error); // Failure
    });
};
const getUniversities = (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  excelToJsonModel.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      return res.send({
        status: 200,
        message: "Universities details",
        data: data.slice(startIndex, endIndex),
      });
    }
  });
};

export { getUniversities, postUniversities };
