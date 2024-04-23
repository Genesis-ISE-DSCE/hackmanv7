import express from "express";
import { registerController } from "../controllers/Auth";
import { asyncHandler } from "../utils/handlers";

const router = express.Router();

router.route("/register").post(asyncHandler(registerController));

module.exports = router;
