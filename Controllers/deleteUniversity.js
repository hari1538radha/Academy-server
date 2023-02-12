import { excelToJsonModel } from "../Schema/excelToJson.js"

export const DeleteUniversity = (req, res) => {
    let {S_No} = req.params
    S_No = parseInt(S_No,10)
    console.log(S_No)
    excelToJsonModel.deleteOne({
        S_No: S_No
    }, (err, data) => {
        return res.send({
            status: 200,
            message: "Data deleted",
            data: data
        });
    })
}
