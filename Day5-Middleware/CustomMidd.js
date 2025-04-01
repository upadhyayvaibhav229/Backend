import express from "express";
import fs from "fs";
const PORT = 8000;
const app = express();

app.use(express.json());

const watchMan = (req, res, next) => {
    const startTime = new Date().getTime();
    req.body.server = "NodeJS";
    next();
    const endTime = new Date().getTime();
    console.log(`Request took ${endTime - startTime} ms`);
}

const logger = (req, res, next) => {
    fs.appendFileSync("./log.txt", "/n" + req.method + " " + req.url, "utf-8");
    next();
}

app.use(watchMan, logger);


app.get("/", (req, res) => {
    res.send("Welcome to our home page");
});

app.post("/addStudent", (req, res) => {
    console.log(req.body);
    res.send("invoked");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
