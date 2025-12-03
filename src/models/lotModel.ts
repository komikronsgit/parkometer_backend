import mongoose from "mongoose";

export default mongoose.model("lots", new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  availableSpaces: {
    type: Number,
    required: true
  },
  totalSpaces: {
    type: Number,
    required: true
  },
  distance: {
    type: String,
    required: true
  }
}));