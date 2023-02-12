import { programSchemaModel } from "../../Schema/ProgramSchema.js";
import GenerateSchema from 'generate-schema';
import mongoose from "mongoose" ;

const postProgramme = (req, res) => {
  const schema = GenerateSchema.json("program", req.body[0])
  console.log(schema)
  const ProgramSchemaModel = mongoose.model("program", schema.properties);

   ProgramSchemaModel.insertMany(req.body)
    .then(function (response) {
        console.log("Data inserted"); // Success
        return res.send("Data inserted");
    })
    .catch(function (error) {
        console.log(error); // Failure
    });
};

const getProgramme = (req, res) => {
  const { page = 1, limit = 300 } = req.query;
  programSchemaModel
    .find((err, data) => {
      if (err) {
        console.log(err);
      } else {
        return res.send({
          status: 200,
          message: "Programme details",
          data: data,
        });
      }
    })
    .limit(limit * 1)
    .skip((page - 1) * limit);
};


export { getProgramme, postProgramme };
