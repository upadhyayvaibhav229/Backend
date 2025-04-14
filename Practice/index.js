import express from "express";
import registerUser from "./Route/user.route.js";

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

const demo = () => {
  try {
    console.log("Demo function called");
    return "Demo function executed";
  } catch (error) {
    
  }

  
}

// Use the route
app.use(registerUser);

// Your other routes and server setup
app.listen(8998, () => {
  console.log("Server is running on port 3000");
});
