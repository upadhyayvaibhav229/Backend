// http - hypertext transfer protocol
// https - secure hypertext transfer protocol

// get - read data
// post - create data
// put - update data
// delete - delete data
// patch - update specific data
//

import { createServer } from "http";

const server = createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader(200, { "content-type": "text/html" });
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Welcome to our about page");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);
  }
});

server.listen(5000, () => {
  console.log("Server is running on port 5000....");
});
