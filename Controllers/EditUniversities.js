import { excelToJsonModel } from "../Schema/excelToJson.js";

export const editUniversities = (req, res) => {
  let {S_No, 
    State, 
    Type, 
    Yrofestab, 
    Location_Coordinates, 
    Name,
    City,
    District,
    PIN,
    url,
    Phone,
    Village,
    Email,
    Image,
    Logo} = req.body.values;
    console.log(req.body)
    console.log(S_No, "before")
    S_No = parseInt(S_No,10)
    console.log(S_No, "after")
    excelToJsonModel.updateOne(
    { S_No: S_No },
    {
      $set: {
        State: State,
        Type: Type,
        Yrofestab: Yrofestab,
        Location_Coordinates: Location_Coordinates,
        Name: Name,
        City: City,
        District: District,
        PIN: PIN,
        url: url,
        Phone: Phone,
        Village: Village,
        Email: Email,
        Image: Image,
        Logo: Logo,
      },
    },
    { upsert: true },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        return res.send({
          status: 200,
          message: "Updated Universities details",
          data: data,
        });
      }
    }
  );
};
