import express from "express";

const app = express();
app.use(express.json());
const PORT = 8000;

app.get("/",(req,res)=>{
    res.send("Welcome to our home page")
})

app.get("/about",(req,res)=>{
    res.send("Welcome to our about page")
})

app.get("/contact",(req,res)=>{
    // res.send("Welcome to our contact page")
    // send json
    res.json({
        message : "Welcome to our contact page",
        name : "Shahid",
        age : 22
    })
})

// query params & url params
// app.get("/datacatch",(req,res)=>{
//     const {name, age} = req.query;
//     res.send(`Name: ${name}, Age: ${age}`);
// })

// app.get("/wheather/:city",(req,res)=>{
//     const {city} = req.params;
//     const DB = {
//         "Mumbai": "Sunny",
//         "Delhi": "Rainy",
//         "Kolkata": "Cloudy"
//     }
//     const weather = DB[city];
//     res.send(`Weather for city ${city} is ${weather}`);
// })

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})