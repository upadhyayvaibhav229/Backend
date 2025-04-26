import mongoose, { Schema } from "mongoose";

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true, 
    },
    age: {
        type: Number,
        required: true,
        min: 0,
    },
    class: {
        type: String,
        required: true,
    },
    rollNo: {
        type: Number,
        required: true,
        unique: true,
    },
    phoneNo: {
        type: String,
        required: true,
        unique: true,
        
    },
    Subjects : [
        {
            subjectName: String,
            marks: Number,
        }
    ]
})

export const Student = mongoose.model("Student", StudentSchema);