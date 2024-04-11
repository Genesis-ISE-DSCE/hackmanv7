import express from "express";
import { asyncHandler } from "../utils/handlers";
import {
  deleteTeam,
  getAllTeams,
  updatePaymentStatus,
} from "../controllers/Admin";

const router = express.Router();
router.route("/getAllTeams").get(asyncHandler(getAllTeams));
router.route("/deleteTeam/:id").delete(asyncHandler(deleteTeam));
router.route("/updatePaymentStatus/:id").put(asyncHandler(updatePaymentStatus));

module.exports = router;
