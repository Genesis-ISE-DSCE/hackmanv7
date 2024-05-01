import express from "express";
import { asyncHandler } from "../utils/handlers";
import {
  deleteTeam,
  getAllTeams,
  updatePaymentStatus,
  adminLogin,
} from "../controllers/Admin";
import { limiter } from "../config/rateLimiterConfig";
import authenticateToken from "../middleware/auth";

const router = express.Router();
router
  .route("/getAllTeams")
  .get(authenticateToken, limiter, asyncHandler(getAllTeams));
router
  .route("/deleteTeam/:id")
  .delete(authenticateToken, asyncHandler(deleteTeam));
router
  .route("/updatePaymentStatus/:id")
  .put(authenticateToken, asyncHandler(updatePaymentStatus));
router.route("/login").post(asyncHandler(adminLogin));

module.exports = router;
