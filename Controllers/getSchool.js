import { addingSchoolModel } from "../Schema/addSchools.js";

const GetSchoolData = (req, res) => {
  const page = req.query.page || 1
  const limit = req.query.limit || 10
  
  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  addingSchoolModel.find((err, data) => {
    if (err) {
        console.log(err)
    } else {
        return res.send ({
            status: 200,
            message: "school details",
            data: data
        })
    }
  })
}

export default GetSchoolData;
