import express from "express";
import { asyncHandler } from "../utils/handlers";
import {
  deleteTeam,
  getAllTeams,
  updatePaymentStatus,
  adminLogin,
} from "../controllers/Admin";
import { limiter } from "../config/rateLimiterConfig";

const router = express.Router();
router.route("/getAllTeams").get(limiter, asyncHandler(getAllTeams));
router.route("/deleteTeam/:id").delete(asyncHandler(deleteTeam));
router.route("/updatePaymentStatus/:id").put(asyncHandler(updatePaymentStatus));
router.route("/login").post(asyncHandler(adminLogin));

module.exports = router;
