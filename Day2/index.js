const { error } = require("console");
const fs = require("fs");

// read file
// fs.readFile("README.md",{encoding: "utf-8"}, (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });


// syn way
// const data = fs.readFileSync("README.md", {encoding: "utf-8"});
// console.log(data);
// console.log("hello");


// write file
// fs.writeFile("output.txt", "Output file",{encoding: "utf8"}, (error)=>{
//     if(error) console.log(error);
    
//     console.log("file created..........");
// })


// 

fs.rm("myFile.txt",(error)=>{
    if(error) console.log(error);
    
    console.log("dir deleted sucessfully");
    
})