import { Router } from "express";
import { 
    createStudent, 
    deleteStudent, 
    getAllStudents, 
    updateStudent } from "../Controllers/controller.js";

const StudentRouter = Router();

StudentRouter.get("/",getAllStudents);
StudentRouter.post("/create",createStudent);
StudentRouter.put("/update/:id",updateStudent);
StudentRouter.delete("/delete/:id",deleteStudent);

export default StudentRouter;