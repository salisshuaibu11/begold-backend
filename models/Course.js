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
    course_prerequisite: {
        type: String,
        enum: ["Knowlege of JS", "Knowledge of CSS"]
    },
    course_category: String,
    course_type: {
        type: String,
        required: true
    },
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
        type: Schema.Types.ObjectId,
        ref: "instructor"
    },
    course_lessons: [{
        type: Schema.Types.ObjectId,
        ref: "lessons"
    }]
});

const Course = model("Course", courseSchema);

module.exports = Course;