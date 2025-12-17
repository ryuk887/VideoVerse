import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
        console.log(process.env.MONGO_URI);
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`MONGODB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Mongoose connection error", error);
        process.exit(1);
    }
}

export default connectDB;