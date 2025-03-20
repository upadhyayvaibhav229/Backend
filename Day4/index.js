// express

const express = require("express");

const PORT  = 8000;
const app = express();

app.use(express.json()); //middleware
// app.get("/", (req, res)=>{
//     res.send("Welcome to our home page");
// });



app.post("/addData", (req, res)=>{
    console.log(req.body);
    res.send("invoked");
})



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})