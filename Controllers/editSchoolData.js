import { addingSchoolModel } from "../Schema/addSchools.js";

export const editSchool = (req, res) => {
    let {
        SlNo,
        name,
        code,
        estdYr,
        Catagory,
        address,
        village,
        city,
        pin,
        district,
        state,
        location,
        areaType,
        principal,
        url,
        email,
        phone,
        AffiliationBody,
        AfiliationNumber,
        ClassesFrom,
        ClassesTo,
        Mol,
        streamsOffered,
        AboutSchool,
        facilities,
        events,
        managemnet,
        gender,
        AccStatus,
        schoolArea,
        facultyStrength,
        studentStrength,
        des,
        blogPosts,
        Gallery,
        Apply
    }=req.body.values;
    addingSchoolModel.updateOne(
        {SlNo: SlNo},
        {
            $set: {
                name,
                code,
                estdYr,
                Catagory,
                address,
                village,
                city,
                pin,
                district,
                state,
                location,
                areaType,
                principal,
                url,
                email,
                phone,
                AffiliationBody,
                AfiliationNumber,
                ClassesFrom,
                ClassesTo,
                Mol,
                streamsOffered,
                AboutSchool,
                facilities,
                events,
                managemnet,
                gender,
                AccStatus,
                schoolArea,
                facultyStrength,
                studentStrength,
                des,
                blogPosts,
                Gallery,
                Apply
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
