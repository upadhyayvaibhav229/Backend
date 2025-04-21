import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config(); // load env variables


const Connection = mongoose.connect(process.env.MONGODB_URL);
// const Connection = mongoose.connect("mongodb://127.0.0.1:27017/userDB");

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