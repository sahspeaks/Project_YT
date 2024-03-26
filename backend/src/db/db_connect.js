import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  console.log("MONGODB_URI: ", process.env.MONGODB_URI);
  try {
    const dbInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(`MongoDB Connected: ${dbInstance.connection.host}`);
  } catch (err) {
    console.error("MONGODB Connection Error: ", err.message);
    // Exit process with failure
    process.exit(1);
  }
};
export default connectDB;
