import e from "express";
import mongoose from "mongoose";

export default mongoose.model("users", new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  plate: {
    type: String,
    required: true,
  }
}));
