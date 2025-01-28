import express from "express";
import { getAllShipments, getShipmentData } from "../controllers/Shipment";
// import { getAllShipment, getShipmentData } from "../controllers/Shipment";
const router = express.Router();

router.get("/allshipments" , getAllShipments)
router.get("/getShipmentDetails" , getShipmentData);


export default router;
