import mongoose from "mongoose";

const spotSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String },
  hasSpecialTimings: { type: Boolean, default: false },
  timingFrom: { type: String },
  timingTo: { type: String },
  isPaid: { type: Boolean, default: false },
  pricePerHour: { type: Number },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  createdBy: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("spots", spotSchema);
