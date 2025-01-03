import express from "express";
import { getAllShipment, getShipmentData } from "../controllers/Shipment";
// import { getAllShipment, getShipmentData } from "../controllers/Shipment";
const router = express.Router();

router.get("/allshipments" , getAllShipment)
router.get("/getShipmentDetails" , getShipmentData);


export default router;
