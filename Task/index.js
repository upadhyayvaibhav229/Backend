const dns = require("dns");
const cow = require("cowsay");
const fs = require("fs");
const { get } = require("http");

function getIp(website_name) {
  dns.lookup(website_name, (err, address, family) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log(
        `IP Address of ${website_name} is ${address} and family is ${family}`
      );
    }
  });
}

// fs
const writeToFile = (filename, content) => {
  fs.writeFile(filename, content, { encoding: "utf-8" }, (err) => {
    if (err) {
      console.log("Error writing file:", err);
      return;
    }
    console.log(`File ${filename} written successfully`);
  });
};

const readAFile = (filename) => {
  fs.readFile(filename, "utf-8", (err, data) => {
    if (err) {
      console.log("Error reading file:", err);
      return;
    }
    console.log(`Content of ${filename}: \n${data}`);
  });
};

const deleteAFile = (filename) => {
  fs.rm(filename, (err) => {
    if (err) {
      console.log("Error deleting file:", err);
      return;
    }
    console.log(`File ${filename} deleted successfully`);
  });
};

// cowsay

function MakeCowSay(text) {
  console.log(cow.say({ text: text }));
}

const [, , command, args1, args2] = process.argv;

// console.log(`node path ${process.argv[0]}\n script path ${process.argv[1]}`);

switch (command) {
  case "gip":
    if (args1) getIp(args1);
    else console.log("Please enter website name");

    break;
  case "wf":
    if (args1 && args2) writeToFile(args1, args2);
    else console.log("Please enter file name and content");
    break;

  case "rf":
    if (args1) readAFile(args1);
    else console.log("Please enter file name");
    break;

  case "df":
    if (args1) deleteAFile(args1);
    else console.log("Please enter file name");
    break;

  case "cs":
    if (args1) MakeCowSay(args1);
    else console.log("Please enter text");
    break;

  default:
    console.log("Invalid command");
    break;
}

// commands
// node Task/index.js gip google.com
// node Task/index.js wf test.txt "Hello world"
// node Task/index.js rf test.txt
// node Task/index.js df test.txt
// node Task/index.js cs "Hello world"
