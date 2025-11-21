import mongoose from "mongoose";

const Connection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("DB is Connected...");
  } catch (err) {
    console.error("Database connection error.");
    process.exit(1);
  }
};

export default Connection;
