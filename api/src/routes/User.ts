import express from "express";
import { createUser, getAllUsers } from "../controllers/User";
const router = express.Router();

router.post("/adduser" , createUser);
router.get("/users" , getAllUsers)


export default router;