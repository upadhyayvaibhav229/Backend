import express from "express";
import cors from "cors";
import StudentDataRoute from "./routes/Students.routes.js";
import AddStudentsData from "./routes/Data.routes.js";
const PORT = 8998;
const app = express();

app.use(express.json()); 

// app.use('/student', StudentDataRoute);
// app.use('/student-data', AddStudentsData); 

// app.get("/", (req, res) => {    
//     res.send("Welcome to our home page");
// });

// app.get("/students", (req, res) => {
//     res.send("All Students...");
// });

// params : id

// app.get("/student/:id", (req, res) => {
//     const id = req.params.id;
//     res.send(`Student ID: ${id} example of params`);
// })

// // query
// app.get("/datacatch", (req,res)=> {
//     const {name, age} = req.query;
//     res.send(`Name: ${name} Age: ${age}`);
// })

app.get("/weather", (req, res) => {
    const DB = {
        "Mumbai": "Sunny",
        "Delhi": "Rainy",
        "Kolkata": "Cloudy"
    }
    const city = req.query.city;
    const weather = DB[city];
    console.log(weather);
    
    res.send(`Weather for city ${city} is ${weather}`);
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
