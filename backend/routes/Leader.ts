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
const router = express.Router();
import multer from "multer";
import authenticateToken from "../middleware/auth";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.route("/login").post(asyncHandler(login));
router
  .route("/getTeamDetails")
  .get(authenticateToken, asyncHandler(getTeamDetails));
router
  .route("/addMember/:id")
  .post(authenticateToken, asyncHandler(addTeamMember));
router
  .route("/removeMember/:id")
  .delete(authenticateToken, asyncHandler(removeMember));
router
  .route("/editMember/:id")
  .put(authenticateToken, asyncHandler(editTeamMember));
router
  .route("/addGithub/:id")
  .put(authenticateToken, asyncHandler(addOrEditgithub));
router
  .route("/uploadPic/:id")
  .post(upload.single("image"), asyncHandler(uploadPic));

module.exports = router;
