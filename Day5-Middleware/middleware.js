import express from "express";

const PORT = 5000;
const app = express();

// app.use((req, res, next)=>{
//     console.log("Middleware Invoked");
//     next();
//     console.log("Middleware Invoked");

// });

// app.use((req, res, next)=>{
    // if (1 + 3 === 9) {
        // console.log("Middleware Invoked");
        
    // }else{
    //     console.log("Middleware Not Invoked");
        
    // }
//     if (req.method === "POST") {
//         res.send("POST Request Not Allowed");
//         console.log("Middleware Invoked");
        
//     }
    
//     next();
// })

app.use((req, res, next)=>{
    console.log('a');
    next();
    console.log('b');
})
app.use((req, res, next)=>{
    console.log('c');
    next();
    console.log('d');
})
app.use((req, res, next)=>{
    console.log('e');
    next();
    console.log('f');
});
app.use((req, res, next)=>{
    console.log('g');
    next();
    console.log('h');
});

app.get("/", (req, res)=>{
    console.log("Home Page");
    
    res.send("Welcome to our home paged");
});

app.get("/about", (req, res)=>{
    console.log("About Page");
    res.send("Welcome to our about page");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});