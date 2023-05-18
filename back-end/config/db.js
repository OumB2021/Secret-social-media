import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    // Connect to mongoDB
    mongoose.set("strictQuery", true);

    const conn = await mongoose.connect(
      "mongodb://127.0.0.1:27017/secretMedia",
      {
        useNewUrlParser: true,
      }
    );

    console.log(`MongoDB connected : ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
