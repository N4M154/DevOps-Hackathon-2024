// backend/models/carModel.js

import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  year: { type: Number, required: true },
});

const Car = mongoose.model("Car", carSchema);

export default Car;
