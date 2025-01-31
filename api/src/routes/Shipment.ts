import express from "express";
import { getAllShipments, getShipmentData } from "../controllers/Shipment";
import { auth } from "../middlewares/Auth";
// import { getAllShipment, getShipmentData } from "../controllers/Shipment";
const router = express.Router();

router.get("/allshipments" , auth , getAllShipments)
router.get("/getShipmentDetails" , getShipmentData);


export default router;
