const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const Course = require("../models/Course");
const User = require("../models/User");
const Lessons = require("../models/Lessons");

// @desc Create course
// @route POST /api/instructor/createCourse
// @access Private
const createCourse = asyncHandler(async (req, res) => {
    const { user_type } = req.body;

    if (user_type === "instructor") {
        const newCourse = await Course.create({...req.body});

        res.json({
            status: "success",
            message: "course created",
            data: newCourse
        });
    } else {
        res.status(401);
        throw new Error(`You can't create as you are not an Instructor`)
    }
});

// @desc Create Lesson
// @route POST /api/instructor/createLesson
// @access Private
const createLesson = asyncHandler(async (req, res) => {
    const courseId = req.params.id;

    const newLesson = await Lessons.create({...req.body});
    
    await Course.findByIdAndUpdate(courseId, {$push: {lesson: newLesson}}).populate("Lessons");

    const foundCourses = await Course.findById(courseId);

    res.json({
        status: "success",
        message:"lesson added",
        data: foundCourses,
    });
});

// @desc Get all courses
// @route POST /api/instructor/course
// @access Private
const getCourse = asyncHandler(async(req, res) => {
    const course = await Course.find({});

    res.json({
        data: course,
    });
});

module.exports = {
    createCourse,
    createLesson,
    getCourse,
};