import mongoose from "mongoose";

export default mongoose.model("reservations", new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  lot: {
    type: String,
    required: true
  },
  startDateTime: {
    type: Date,
    required: true
  },
  endDateTime: {
    type: Date,
    required: true
  }
}));