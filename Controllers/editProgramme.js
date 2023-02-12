import { programSchemaModel } from "../Schema/ProgramSchema.js";

export const editProgramme = (req, res) => {
    let {SNo,
        ProgrammeType,
        Programme,
        Name,
        Discipline
    } = req.body.values;
    console.log(req.body);
    programSchemaModel.updateOne(
        {SNo: SNo},
        {
            $set: {
                ProgrammeType: ProgrammeType,
                Programme: Programme,
                Name: Name,
                Discipline: Discipline
            }
        },
        { upsert: true },
        (err, data) => {
        if (err) {
        console.log(err);
        } else {
        return res.send({
          status: 200,
          message: "updated events",
          data: data,
        });
      }
    }
    )
       
}
