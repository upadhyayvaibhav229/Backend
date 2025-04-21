import mongoose from 'mongoose';


const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${connection}`);
    } catch (error) {
        console.log("mongoodb connection Not connected check again", error);
        process.exit(1);
        
    }
}

export default connectDB;