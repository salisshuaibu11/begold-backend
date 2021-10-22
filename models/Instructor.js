const { Schema, model } = require("mongoose");

const instructorSchema = Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    instructor_profile: {
        name: String,
        email: String,
        password: String,
        gender: String,
        dob: String,
        address: String,
        occupation: String,
    },
    instructor_lessons: [{
        type: Schema.Types.ObjectId,
        ref: "lessons",
    }]
});

const Instructor = model("Instructor", instructorSchema);

module.exports = Instructor;