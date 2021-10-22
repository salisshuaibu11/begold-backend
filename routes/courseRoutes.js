const express = require("express");
const router = express.Router();

const { 
    createCourse, 
    createLesson,
    getCourse
} = require("../controllers/courseController");

router
    .route("/course")
    .get(getCourse);

router
    .route("/createCourse")
    .post(createCourse);

router
    .route("/createLesson/:id")
    .post(createLesson);

module.exports = router;