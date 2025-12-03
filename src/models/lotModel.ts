import mongoose from "mongoose";

export default mongoose.model("lots", new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  },
  availableSpace: {
    type: Number,
    required: true
  },
  totalSpace: {
    type: Number,
    required: true
  },
  handicapParking: {
    type: String,
    required: true
  }
}));