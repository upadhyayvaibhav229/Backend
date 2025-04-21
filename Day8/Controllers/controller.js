import { Student } from "../models/student.model";


const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);

    } catch (error) {
        res.status(500).json({ message: "Error fetching students" });
        
    }
}