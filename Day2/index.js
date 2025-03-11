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

// fs.rm("myFile.txt",(error)=>{
//     if(error) console.log(error);
    
//     console.log("dir deleted sucessfully");
    
// })

fs.appendFile('message.txt', '\ndata2 to append', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  }); 

// const append = fs.appendFileSync("./message.txt", "\nsecound time", {encoding: "utf-8"})
// console.log(append);


// fs.watchFile('message.text', (curr, prev,) => {
//     console.log(`the current mtime is: ${curr.mtime}`);
//     console.log(`the previous mtime was: ${prev.mtime}`);
//   }); 

fs.watch('./data.txt',(event, filename) => {
    console.log(event);
    console.log(filename);
});