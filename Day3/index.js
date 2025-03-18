// const fs = require("fs");
// const http = require("http");

// const port = 5000;

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.end(
//       `
//             welcome to the Home Page
//             <br>
//             Check Notes <a href="/Notes">Notes</a>
//             `
//     );
//   } else if (req.url === "/Notes") {
//     fs.readFile("./index.html", { encoding: "utf-8" }, (err, data) => {
//       if (err) {
//         console.log(err);
//         res.end("Error");
//       } else {
//         res.writeHead(200, { "content-type": "text/html" });
//         res.write("<h1>Notes</h1>");
//         res.end(data);
//       }
//     });
//   }
// });

// server.listen(port, () => {
//   console.log(`Server is running on port ${port}....`);
// });


const http = require("http");
const fs = require("fs");


const port = 5000;

const server = http.createServer((req, res) => {
    if (req.url === "/addData" && req.method === "POST") {
        let str = "";
        req.on("data", (chunk) => {
            str += chunk;
        });
        req.on("close", ()=>{
            console.log("Data Received: ", str);
            res.end("Data Received");
            
        });
        req.end("Data Received");

    }
});

server.listen(port, () => {
    console.log(`Server is running on port 5000 ${port}....`);
});