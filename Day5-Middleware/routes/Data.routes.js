import express from "express";
import fs from "fs";
const AddStudentsData = express.Router();


AddStudentsData.post("/addBatch/web-25",(req, res)=>{
    fs.appendFileSync("web-25.txt" , JSON.stringify(req.body), "utf-8");
    res.send("File Saved Succesffuly");
})

AddStudentsData.post("/addBatch/web-24",(req, res)=>{
    fs.appendFileSync("web-24.txt" , JSON.stringify(req.body), "utf-8");
    res.send("File Saved Succesffuly");
})

export default AddStudentsData;