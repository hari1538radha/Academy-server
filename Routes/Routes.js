import express from "express";
import multer from "multer";
import { login } from "../Controllers/Login.js";
import { signup } from "../Controllers/Signup.js";
import { uploadTopics } from "../Controllers/Topics/Topics.js";
import { uploadEvents } from "../Controllers/Events/Events.js";
import { topics } from "../Controllers/Topics/landingTopic.js";
import { events } from "../Controllers/Events/landingEvents.js";
import { AddImages } from "../Controllers/images.js";
import { userProfileData } from "../Controllers/userProfile.js";
import { detailpage } from "../Controllers/DetailPage/DetailPage.js";
import { detail } from "../Controllers/DetailPage/Detail.js";
import { listofPrograms } from "../Controllers/listOf.js";
import { getExcelofEducation } from "../Controllers/readEducation.js";
import {
  getUniversities,
  postUniversities,
} from "../Controllers/Universities/universities.controller.js";
import {
  getProgramme,
  postProgramme,
} from "../Controllers/Programme/programme.controller.js";
import { EventById } from "../Controllers/Events/getEventById.js";
import { editEvent } from "../Controllers/Events/EditEvents.js";
import { addQuiz } from "../Controllers/quizupload.js";
import { quizData } from "../Controllers/quizData.js";
import { createUser } from "../Controllers/userSignup.js";
import { getuserimg } from "../Controllers/getuserimg.js";
import { editUniversities } from "../Controllers/EditUniversities.js";
import { DeleteUniversity } from "../Controllers/deleteUniversity.js";
import { DeleteProgramme } from "../Controllers/deleteProgramme.js";
import { DeleteSchool } from "../Controllers/deleteSchool.js";
import { AddSchoolData } from "../Controllers/addSchool.js";
import GetSchoolData from "../Controllers/getSchool.js";
import { editProgramme } from "../Controllers/editProgramme.js";
import { editSchool } from "../Controllers/editSchoolData.js";
import { searchData } from "../Controllers/search.js";

const Storages = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "profile");
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const Upload = multer({
  storage: Storages,
  // limits: {
    // fileSize: 90000000,
  // },
});

const users = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "profilepic");
  },

  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});

const uploadPic = multer({
  storage: users,
  limits: {
    fileSize: 90000000,
  },
});

const eventStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploadimage')
  },
  filename: (req, file, callback) => {
    callback(null, `${file.originalname}`);
  },
});

const eventImgUpload = multer({
  storage: eventStorage
});

const Quizimage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "QuizQuestionImage");
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const QuizImg = multer({
  storage: Quizimage,
});

const Route = express.Router();

Route.post("/signup", signup);
Route.post("/studentsignup", uploadPic.single("userimage"), createUser);
Route.post("/login", login);
Route.get("/userimage", getuserimg);
Route.post("/post-topic", uploadTopics);
Route.post("/post-event",eventImgUpload.single("eventImage"), uploadEvents);
Route.get("/topics", topics);
Route.get("/geteducation", getExcelofEducation);
Route.get("/events", events);
Route.post("/profilepicture", Upload.single("testImage"), AddImages);
Route.post("/listofexcel", listofPrograms);
Route.get("/userProfile", userProfileData);
Route.get("/detailpage", detailpage);
Route.post("/detailpage", detail);
Route.post("/exceltojson", postUniversities);
Route.get("/universities", getUniversities);
Route.post("/programme", postProgramme);
Route.get("/programme", getProgramme);
Route.get("/event/:id", EventById);
Route.put("/editevent",eventImgUpload.single("eventImage"), editEvent);
Route.post("/addquiz",addQuiz);
Route.post("/addschool",AddSchoolData);
Route.get("/getschool", GetSchoolData);
Route.get("/quizdata", quizData);
Route.put("/edit-event", editEvent);
Route.put("/edit-universities", editUniversities);
Route.put("/edit-programme", editProgramme);
Route.put("/edit-school", editSchool);
Route.delete("/delete-universities/:S_No", DeleteUniversity);
Route.delete("/delete-programme/:SNo", DeleteProgramme);
Route.delete("/delete-school/:SlNo", DeleteSchool);
Route.get("/search", searchData) ;

export default Route;
