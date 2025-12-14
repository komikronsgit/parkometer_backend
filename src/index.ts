import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import router from "./router";
import { initializeDefaultData } from "./defaultData";

const app: Application = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Base route
app.get("/", (req: Request, res: Response) => {
  res.send("Parkometer API is running 🚗");
});

// ✅ Health check (REQUIRED for Docker & CI)
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    status: "healthy",
    environment: process.env.NODE_ENV || "development",
  });
});

// API routes
app.use("/", router);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/parkometer_db")
  .then(async () => {
    console.log("✅ Connected to MongoDB");
    await initializeDefaultData();
  })
  .catch((error) => {
    console.error("⚠️ MongoDB not connected. Running without database.");
  });