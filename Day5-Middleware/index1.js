import express from "express";

const PORT = 8000;
const app = express();

const timeLogger = (req, res, next) => {
    const startTime = new Date().getTime();
    next();
    const endTime = new Date().getTime();
    console.log(`Request took ${endTime - startTime} ms`);

}

const watchman = (req, res, next) => {
    if (req.url === "/about") {
        next();
    }else{
        res.send("Page Not Found");
    }
}

app.use(timeLogger,watchman);

app.get("/", (req, res) => {
    console.log("Home Page Invoked");
    
    res.send("Welcome to our home page");
});

app.get("/about", (req, res) => {
    console.log("About Page Invoked");
    
    res.send("Welcome to our about page");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
