import mongoose from "mongoose";

export default mongoose.model("lots", new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  availableLots: {
    type: Number,
    required: true
  },
  distance: {
    type: String,
    required: true
  }
}));