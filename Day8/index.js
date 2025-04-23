import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { app } from "./app.js";


const PORT = 3000;

app.use(express.json());
dotenv.config();



connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    })