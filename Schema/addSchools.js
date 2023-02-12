import mongoose from "mongoose";

const addingSchoolSchema = new mongoose.Schema({
    SlNo: {
        type: Number
    },
    name: {
        type: String
    },
    code: {
        type: String
    },
    estdYr: {
        type: Number
    },
    Catagory: {
        type: String
    },
    address: {
        type: String
    },
    village: {
        type: String
    },
    city: {
        type: String
    },
    pin: {
        type: Number
    },
    district: {
        type: String
    },
    state: {
        type: String
    },
    location: {
        type: String
    },
    areaType: {
        type: String
    },
    principal: {
        type: String
    },
    url: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    AffiliationBody: {
        type: String
    },
    AfiliationNumber: {
        type: String
    },
    ClassesFrom: {
        type: String
    },
    ClassesTo: {
        type: String
    },
    Mol: {
        type: String
    },
    streamsOffered: {
        type: String
    },
    AboutSchool: {
        type: String
    },
    facilities: {
        type: String
    },
    events: {
        type: String
    },
    managemnet: {
        type: String
    },
    gender: {
        type: String
    },
    AccStatus: {
        type: String
    },
    schoolArea: {
        type: String
    },
    facultyStrength: {
        type: String
    },
    studentStrength: {
        type: String
    },
    des: {
        type: String
    },
    blogPosts: {
        type: String
    },
    Gallery: {
        type: String
    },
    Apply: {
        type: String
    }
})

export const addingSchoolModel = new mongoose.model(
    "list-of-school", addingSchoolSchema
)
