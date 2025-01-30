import express from "express"
import { login, refreshToken } from "../controllers/Auth";

const router = express.Router();

router.post("/login" , login)
router.get("/refresh-token" , refreshToken);


export default router;