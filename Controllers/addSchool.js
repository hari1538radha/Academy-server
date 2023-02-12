import { addingSchoolModel } from "../Schema/addSchools.js";
import GenerateSchema from 'generate-schema';
import mongoose from "mongoose" ;

export const AddSchoolData = (req, res) => {
    let schema = GenerateSchema.json("list-of-school", req.body[0])
    console.log(schema)
    const SchoolSchemaModel = mongoose.model("list-of-school", schema.properties);

    SchoolSchemaModel.insertMany(req.body)
    .then(function (response) {
        console.log("Quiz data inserted");
        return res.send("data inserted")
      })
      .catch(function (error) {
        console.log(error); // Failure
    });
}
