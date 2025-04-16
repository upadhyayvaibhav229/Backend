import mongoose from "mongoose";

const Connection = mongoose.connect("mongodb://127.0.0.1:27017/userDB");

const userSchema = new mongoose.Schema({
    name:String,
    age: Number,
    // email: String,
    role: String,
    location: String,
    language: String,
    org: String,
}, {
    versionKey: false,
});

const UserModel = mongoose.model("user", userSchema);

export { Connection, UserModel };