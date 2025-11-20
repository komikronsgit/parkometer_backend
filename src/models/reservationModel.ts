import mongoose from "mongoose";

export default mongoose.model("reservations", new mongoose.Schema({
  username: {
    type: String,
    required: false
  },
  lot: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
}));