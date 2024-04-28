// backend/controllers/carController.js

import Car from "../models/carModel.js";

export const sellCarController = async (req, res) => {
  try {
    const { name, price, year } = req.body;
    // Validation - You can add more validations as needed

    // Create a new car document
    const newCar = new Car({ name, price, year });
    // Save the new car document to MongoDB
    await newCar.save();

    res.status(201).send({
      success: true,
      message: "Car sold successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error selling car",
      error: error.message,
    });
  }
};
