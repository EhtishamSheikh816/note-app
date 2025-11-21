import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import Connection from "./src/config/db.js";
import authRouter from "./src/routes/auth.route.js";
import noteRouter from "./src/routes/note.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

Connection();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "https://ehti-note-app.vercel.app/",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/auth", authRouter);
app.use("/note", noteRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
