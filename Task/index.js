const dns = require("dns");
const cow = require("cowsay");
const fs = require("fs");

function getIp(website_name) {
   dns.lookup(website_name, (err, address, family) => {
        if(err) {
            console.log(err);
            return;
        }else{
            console.log(`IP Address of ${website_name} is ${address} and family is ${family}`);
        }
   });

}

getIp("www.google.com");
getIp("www.facebook.com");

// fs

const writeToFile = fs.writeFile(
  "../text.md",
  "/nHello World",
  { encoding: "utf-8" },
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("File written successfully");
  }
);

// readFile
const readAFile = fs.readFile("../notes.md", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

// deelte file
const deleteAFile = fs.rm("../text.md", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File deleted successfully");
});

// cowsay


function MakeCowSat(text) {
  console.log(cow.say({ text: text }));
  
    
}

MakeCowSat("Hello i am cow");
MakeCowSat("Hello i am cow2");