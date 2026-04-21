const mongoose = require("mongoose");

// flexible
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: {type: String, required: true,unique: true },
    password: String,
    role: { type: String, default: "user", enum: ["user", "admin"] },
});

// create model
const User = mongoose.model("user", UserSchema);

module.exports = User;