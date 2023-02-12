import { programSchemaModel } from "../Schema/ProgramSchema.js";

export const DeleteProgramme = (req, res) => {
    let{SNo} = req.params
    programSchemaModel.deleteOne({
        SNo: SNo
    }, (err, data) => {
        return res.send({
            status: 200,
            message: "Data deleted",
            data: data
        });
    })
}