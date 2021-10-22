const { Schema, model } = require("mongoose");

const lessonsSchema = ({
    lesson_topic: {
        type: String,
        required: true,
    },
    lesson_unit: {
        type: Number,
        required: true,
    },
    lesson_media: String,
    lesson_instructor: Schema.Types.ObjectId,
    lesson_course: [{
        type: Schema.Types.ObjectId,
        ref: "Course",
    }],
    lesson_students: [{
        name: String, 
        email: String, 
        id: Schema.Types.ObjectId,
    }]
});

const Lessons = model("Lessons", lessonsSchema);

module.exports = Lessons;