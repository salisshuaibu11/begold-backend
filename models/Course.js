const { Schema, model } = require("mongoose");
const Courses = require("./Courses");

const courseSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    courseModule: [{
        video: {
            type: String,
            required: true,
        },
    }]
});

const Course = model("Course", courseSchema);

module.exports = Course;