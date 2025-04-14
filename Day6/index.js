import mongoose from "mongoose";

const url = "mongodb://127.0.0.1:27017/student";

// Define schema
const StudentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

// Create model
const StudentModel = mongoose.model("student", StudentSchema);

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("✅ Connected to MongoDB");

    // 🔹 INSERT
    // const insertdata = await StudentModel.create({
    //   name: "John Doe",
    //   age: 25,
    //   email: "john@gmail.com",
    // });
    // console.log("✅ Data inserted:", insertdata);

    // 🔹 DELETE ALL
    // const delAll = await StudentModel.deleteMany({});
    // console.log("🗑️ All data deleted:", delAll);

    // 🔹 DELETE SPECIFIC
    // const delData = await StudentModel.deleteMany({ name: "John Doe", age: 25 });
    // console.log("🗑️ Specific data deleted:", delData);

    // 🔹 UPDATE
    // const updateData = await StudentModel.updateMany(
    //   { name: "John Doe" },
    //   {$set: { name: "Vaibhav Upadhyay" } },
    //   { $set: { age: 20 } }
    // );
    // console.log("✏️ Data updated:", updateData);

    // read all data
    // const data = await StudentModel.find({});
    // console.log("📜 All data:", data);
  } catch (error) {
    console.log("❌ Error connecting to MongoDB:", error);
  }
};

connectDB();
