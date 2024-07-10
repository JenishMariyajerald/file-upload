import mongoose from "mongoose";
import "dotenv/config";

export const connectDB = async () => {
  const url = process.env.MONGODB_URI || "";
  console.log("url", url);

  try {
    await mongoose.connect(url);
    console.log(`Connected to Mongo DB ${url}`);
  } catch {
    console.log("could not connected to db");
  }
};
