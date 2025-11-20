import mongoose from "mongoose";

export default mongoose.model("lots", new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  totalSpaces: {
    type: Number,
    required: true
  },
  available: {
    type: Number,
    required: true
  }
}));