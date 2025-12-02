import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import router from "./router";
import { initializeDefaultData } from "./defaultData";

const app: Application = express();

//  Middleware
app.use(cors());
app.use(bodyParser.json());

//  MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/parkometer_db")
  .then(async () => {
    console.log("✅ Connected to MongoDB");

    // Initialize default lots and reservations *after* DB is ready
    await initializeDefaultData();

    // Start server only after initialization
    app.listen(3000, () => {
      console.log("🚀 Server running on port 3000");
    });
  })
  .catch((error) => {
    console.error("❌ Database connection error:", error);
  });

//  Register routes
app.use("/", router);


app.get("/", (req: Request, res: Response) => {
  res.send("Parkometer API is running 🚗");
});
