import express from "express";
import { Connection, UserModel } from "./db.js";

const port = 4000;

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const data = req.body;
  try {
    // const result = await UserModel.updateMany(
    //   { org: { $exists: true } },
    //   { $set: { org: "Microsoft" } }
    // );

    const result = await UserModel.updateMany(
      {},
      {$set: data}
    )

    res.send(`Modification done successfully ${result.modifiedCount}`);
  } catch (error) {
    console.log("Error in root route: ", error);
    res.status(500).send("Error in root route");
  }
});

// show all data
app.get("/userdata", async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).send("No data provided");
    } else {
     const data =  await UserModel.find({});
      res.send(`${data}`);
    }
  } catch (error) {
    console.log("Error in reading data: ", error);
    res.status(500).send("Error reading user data");
  }
});

// create user
app.post("/createuser", async (req, res) => {
  try {
    const addUser = new UserModel(req.body);
    await UserModel.insertMany(addUser);
    res.send("User created successfully");
  } catch (error) {
    console.log("Error in creating user: ", error);
    res.status(500).send("Error creating user");
  }
});

// update user
app.put("/updateuser/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedData = req.body;
    await UserModel.updateOne({ _id: userId }, { $set: updatedData });
    res.status(200).send("User updated successfully");
  } catch (error) {
    console.log("Error in updating user: ", error);
    res.status(500).send("Error updating user");
  }
});

// delete users
app.delete("/deleteuser/:id", async (req, res) => {
  try {
    await UserModel.deleteOne({ _id: req.params.id });
    res.status(200).send("User deleted successfully");
  } catch (error) {
    console.log("Error in deleting user: ", error);
    res.status(500).send("Error deleting user");
  }
});

// find by id
app.get("/user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).send(user);
  } catch (error) {
    console.log("Error in finding user: ", error);
    res.status(500).send("Error finding user");
  }
});

app.listen(port, async (req, res) => {
  console.log(`Server is running on port ${port}`);

  try {
    await Connection;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
});
