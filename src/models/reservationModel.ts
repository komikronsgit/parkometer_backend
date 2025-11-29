import mongoose from "mongoose";

export default mongoose.model("reservations", new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  lotName: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  }
}));