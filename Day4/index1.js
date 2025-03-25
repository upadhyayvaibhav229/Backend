const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const PORT = 5000;
const app = express();

app.use(express.json()); //middleware
app.use(bodyParser.json());
// parse

// app.get("/students", (req, res)=>{
//     const data = fs.readFileSync("student.txt", "utf-8");
//     res.send(data);
// });

// app.post("/addStudent", (req, res)=>{
//     fs.writeFileSync("student.txt" , JSON.stringify(req.body), "utf-8");
//     res.send("File Saved Succesffuly");
// })

app.get("/students", (req, res) => {
  const data = fs.readFileSync("student.txt", "utf-8");
  res.send(data);
});

app.post("/addStudent", (req, res) => {
  try {
    let students = [];

    students.push(req.body);

    fs.writeFileSync("student.json", JSON.stringify(students, null, 2), "utf-8");

    res.send("Student added successfully");
  } catch (error) {
    console.error("Error saving student:", error);
    res.status(500).send("Error saving student data");
  }
});

// patch and put
app.put("/updateStudent/:id", (req, res) => {
  try {
    const data = fs.readFileSync("student.json", "utf-8");
    const students = data ? JSON.parse(data) : [];

    const id = parseInt(req.params.id);
    console.log(typeof(id));
    
    const studentIndex = students.findIndex((s) => s[0].id === id);
  
    
    if (studentIndex === -1) {
      return res.status(404).send("Student not found");
    }

    // Update student data
    students[studentIndex] = { ...req.body };

    // Write back to file
    fs.writeFileSync("student.json", JSON.stringify(students, null, 2), "utf-8");

    res.send("Student updated successfully");
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).send("Error updating student data");
  }
});
app.patch("/updateStudent/:id", (req, res) => {
  try {
    const data = fs.readFileSync("student.json", "utf-8");
    const students = data ? JSON.parse(data) : [];

    const id = parseInt(req.params.id);
    const studentIndex = students.findIndex((s) => s.id === id);

    if (studentIndex === -1) {
      return res.status(404).send("Student not found");
    }

    // Update student data
    students[studentIndex] = { ...students[studentIndex], ...req.body };

    // Write back to file
    fs.writeFileSync("student.json", JSON.stringify(students, null, 2), "utf-8");

    res.send("Student updated successfully");
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).send("Error updating student data");
  }
});

app.delete("/deleteStudent/:id", (req, res) => {
  try {
    const data = fs.readFileSync("student.json", "utf-8");
    const students = data ? JSON.parse(data) : [];
    const id = parseInt(req.params.id);
    const studentIndex = students.findIndex((s) => s.id === id);
    if (studentIndex === -1) {
      return res.status(404).send("Student not found");
    }

    // delete student data
    const delSTudents = students.filter((s) => s.id !== id);

    // Write back to file
    fs.writeFileSync(
      "student.json",
      JSON.stringify(delSTudents, null, 2),
      "utf-8"
    );

    res.send("Student deleted successfully");
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).send("Error deleting student data");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
