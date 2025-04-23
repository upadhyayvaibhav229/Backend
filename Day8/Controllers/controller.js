import { Student } from "../models/student.model.js";


const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);

    } catch (error) {
        res.status(500).json({ message: "Error fetching students" });
        
    }
}

// Create a new student
const createStudent = async (req, res) => {
    try {
        const { name, age, class: studentClass, rollNo, phoneNo } = req.body;
        // console.log(req.body);
        
        const newStudent = new Student({ name, age, class: studentClass, rollNo, phoneNo });
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ message: "Error creating student" });
        
    }
}

// update a student
const updateStudent = async (req, res) => {
    try {
        const {id} = req.params;
        const { name, age, class: studentClass, rollNo, phoneNo } = req.body;
        const updatedStudent = await Student.findByIdAndUpdate(id, { name, age, class: studentClass, rollNo, phoneNo }, { new: true });
        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(500).json({ message: "Error updating student" });
        
    }
}

// delete a student
const deleteStudent = async (req, res) => {
    try {
        const {id} = req.params;
        await Student.findByIdAndDelete(id);
        
        res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting student" });
        
    }
}
   




export {
    getAllStudents,
    createStudent,
    updateStudent,
    deleteStudent
}