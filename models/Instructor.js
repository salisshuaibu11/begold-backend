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
    instructor_id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    instructor_profile: {
        name: String,
        email: String,
        password: String,
    },
    instructor_lessons: [{
        _id: Schema.Types.ObjectId,
        ref: "lessons",
    }]
});

const Instructor = model("Instructor", instructorSchema);

module.exports = Instructor;