const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
    course_name: {
        type: String,
        required: true,
    },
    course_price: {
        type: Number,
        required: true,
    },
    course_intro: {
        type: String,
        required: true,
    },
    course_prerequisite: [String],
    course_type: {
        type: String,
        required: true
    },
    course_requirements: [String],
    course_intro_video: {
        type: String,
        required: true,
    },
    course_intro_text: {
        type: String,
        required: true,
    },
    course_image: {
        type: String,
        required: true,
    },
    course_instructor: {
        type: String,
        required: true,
    },
    course_lessons: {
        ref: "lessons"
    }
});

const Course = model("Course", courseSchema);

module.exports = Course;