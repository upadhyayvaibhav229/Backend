import { connect } from "http2";
import mongoose from "mongoose";

const url = " mongodb://127.0.0.1:27017/user"

const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
}

connectDB();