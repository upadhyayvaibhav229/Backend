import { Router } from "express";

const registerUser = Router();


let users = [];

registerUser.post("/register", (req, res) => {
    console.log(req.body);
  const { name, email, password } = req.body;
  console.log(name, email, password);
  

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (users.some((user) => user.email === email)) {
    return res.status(400).json({ message: "User already exists" });
  }

  users.push({ name, email, password });

  return res.status(201).json({
    message: "User registered successfully"
  });
});

export default registerUser;  
