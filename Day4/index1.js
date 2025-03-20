const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const PORT  = 5000;
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


app.get("/students", (req, res)=>{
    const data = fs.readFileSync("student.txt", "utf-8");
    res.send(data);
});


app.post("/addStudent", (req, res)=>{   
    fs.writeFileSync("student.txt" , JSON.stringify(req.body), "utf-8");
    res.send("File Saved Succesffuly");
    console.log(req.body);
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})