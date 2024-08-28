import express from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { getOrders, 
         intent, 
         confirm } from "../controllers/order.controller.js";

const router = express.Router();

// router.post("/:gigId", verifyToken, createOrder);
router.route("/").get(verifyJWT, getOrders);
router.route("/create-payment-intent/:id").post(verifyJWT, intent);
router.route("/").put(verifyJWT, confirm);

export default router;