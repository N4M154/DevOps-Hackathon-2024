// backend/routes/carRoutes.js

import express from "express";
import { sellCarController } from "../controllers/carCon.js";

const router = express.Router();

// Route to sell a car
router.post("/sell", sellCarController);

export default router;
