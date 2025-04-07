// crud operation
import express from "express";

const PORT = 4000;
const app = express();

app.use(express.json());

const students = [];
// Create a new student

app.post("/addStudent", (req, res) => {
    try {
        const student = req.body;
        students.push(student);
        // res.send("Student added successfully");
        res.status(200).send("Student added successfully");
    } catch (error) {
        console.error("Error adding student:", error);
        res.status(500).send("Error adding student");
    }
});

// Read all students
app.get("/students",(req,res) => {
    try {
        res.json(students);
    } catch (error) {
        console.error("Error fetching students:", error);
        res.status(500).send("Error fetching students");
        
    }
})

// Read a single student by ID
app.get("/student/:id", (req, res) => {
    try {
        const id = req.params.id;
        const student = students.find((s) => s.id === id);
        if (!student) {
            return res.status(404).send("Student not found");
        }
        res.json(student);
    } catch (error) {
        console.error("Error fetching student:", error);
        res.status(500).send("Error fetching student");
    }
})

// update a student
app.put("/updateStudent/:id", (req, res) => {
    try {
        const id = req.params.id;
        const updatedStudent = req.body;

        const studentIndex = students.findIndex((s) => s.id === id);

        if (studentIndex === -1) {
            return res.status(404).send("Student not found");
        }
        students[studentIndex] = updatedStudent;
    }catch (error) {
        console.error("Error updating student:", error);
        res.status(500).send("Error updating student");
    }
});

// Delete a student
app.delete("/deleteStudent/:id", (req, res) => {
    try{
        const id = req.params.id;
        const studentIndex = students.findIndex((s) => s.id === id);
        if (studentIndex === -1) {
            return res.status(404).send("Student not found");
        }
        students.splice(studentIndex, 1);
        res.status(200).send("Student deleted successfully");
    }catch (error) {
        console.error("Error deleting student:", error);
        res.status(500).send("Error deleting student");
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});