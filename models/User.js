const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    user_profile: {
        name: String,
        email: String,
        password: String,
        gender: String,
        dob: String,
        address: String,
    },
    user_type: {
        type: String,
        default: "Student",
        required: true,
    },
    user_courses: {
        type: Schema.Types.ObjectId,
        ref: "course"
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
});

userSchema.methods.matchPassword = async function(enteredPassword) {
    console.log(enteredPassword)
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = model("User", userSchema);

module.exports = User;