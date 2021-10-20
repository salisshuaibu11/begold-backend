const { Schema, model } = require("mongoose");

const coursesSchema = Schema({
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
    category: {
        type: String,
        enum: ["Business", "Coding", "Marketing", "Finance"],
        required: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    course: [{
        type: Schema.Types.ObjectId,
        ref: "course"
    }],
});

const Courses = model("Courses", coursesSchema);

module.exports = Courses;