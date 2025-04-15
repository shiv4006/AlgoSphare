import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "algosphare"
    })

    console.log("✅ mongodb connected");
  } catch(error) {
    console.log("❌ mongodb connection error: ", error);
    process.exit(1);
  }
}