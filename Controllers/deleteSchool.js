import { addingSchoolModel } from "../Schema/addSchools.js";

export const DeleteSchool = (req, res) => {
    let {SlNo} = req.params
    SlNo = parseInt(SlNo,10)
    console.log(SlNo)
    addingSchoolModel.deleteOne({
        SlNo: SlNo
    }, (err, data) => {
        return res.send({
            status: 200,
            message: "Data deleted",
            data: data
        });
    })
}
