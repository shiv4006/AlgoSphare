import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import authRoutes from "./routes/auth.routes.js"
import { connectDB } from "./config/db.js"
import cookieParser from "cookie-parser"

dotenv.config();

const app = express();
connectDB();

app.use(cors(
  {
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  }
));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("hello");
})


const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`server is listening at http://localhost:${PORT}`);
})