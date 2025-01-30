import express, { Request, Response } from "express";
import { Shipment } from "./models/Shipment";
import { User } from "./models/User";
import shipmentRoutes from "./routes/Shipment";
import userRoutes from "./routes/User";
import authRoutes from "./routes/Auth";
import { RefreshToken } from "./models/RefreshToken";
require("./database/database");
require("dotenv").config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT;

Shipment.sync();
User.sync();
RefreshToken.sync()
app.use("/api/v1/shipment", shipmentRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/auth", authRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send(`App is running !`);
});

app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`);
});
