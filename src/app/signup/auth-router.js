import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRouter from "./signup/auth-router.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(authRouter);

app.use((req, res) => {
    
})

app.listen(async () => {
  await mongoose.connect(process.env.DATABASE_URL);
});
