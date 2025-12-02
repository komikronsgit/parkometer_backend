import mongoose from "mongoose";

const lotSchema = new mongoose.Schema({
  name: { type: String, required: true },
  availableSpaces: { type: Number, required: true },
  distance: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
});

export default mongoose.model("lots", lotSchema);
