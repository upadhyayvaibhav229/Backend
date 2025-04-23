import mongoose from 'mongoose';


const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB connected: ${connection.connection.host}`);
    } catch (error) {
        console.log("mongoodb connection Not connected check again", error);
        process.exit(1);
        
    }
}

export default connectDB;