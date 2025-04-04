import express from "express";

const StudentDataRoute = express.Router();

StudentDataRoute.get("/", (req, res) => {
    res.send("All Students Data");
});

StudentDataRoute.get("/web-25",(req, res)=>{
    res.send("Web-25 Students Data");
});
StudentDataRoute.get("/web-24",(req, res)=>{
    res.send("Web-24 Students Data");
});


export default StudentDataRoute;