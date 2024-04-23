import express from "express";
import { asyncHandler } from "../utils/handlers";
import {
  addOrEditgithub,
  addTeamMember,
  editTeamMember,
  getTeamDetails,
  login,
  removeMember,
  uploadPic,
} from "../controllers/Leader";
import multer from "multer";
import authenticateToken from "../middleware/auth";
import { limiter } from "../config/rateLimiterConfig";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const router = express.Router();

router.route("/login").post(asyncHandler(login));
router
  .route("/getTeamDetails")
  .post(limiter, authenticateToken, asyncHandler(getTeamDetails));
router
  .route("/addMember/:id")
  .post(limiter, authenticateToken, asyncHandler(addTeamMember));
router
  .route("/removeMember/:id")
  .delete(limiter, authenticateToken, asyncHandler(removeMember));
router
  .route("/editMember/:id")
  .put(limiter, authenticateToken, asyncHandler(editTeamMember));
router
  .route("/addGithub/:id")
  .put(limiter, authenticateToken, asyncHandler(addOrEditgithub));
router
  .route("/uploadPic/:id")
  .post(upload.single("image"), asyncHandler(uploadPic));

module.exports = router;
