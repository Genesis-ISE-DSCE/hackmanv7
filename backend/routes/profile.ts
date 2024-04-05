import express from "express";
import { profileLogin } from "../controllers/profile";
import { asyncHandler } from "../utils/handlers";

const router = express.Router();

router.route("/profileLogin").post(asyncHandler(profileLogin));

module.exports = router;
