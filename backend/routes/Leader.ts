import express from "express";
import { asyncHandler } from "../utils/handlers";
import {
  addOrEditgithub,
  addTeamMemeber,
  editTeamMember,
  getTeamDetails,
  login,
  removeMember,
  uploadPic,
} from "../controllers/Leader";
const router = express.Router();
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.route("/login").post(asyncHandler(login));
router.route("/getTeamDetails").get(asyncHandler(getTeamDetails));
router.route("/addMember").post(asyncHandler(addTeamMemeber));
router.route("/removeMember/:id").delete(asyncHandler(removeMember));
router.route("/editMember/:id").put(asyncHandler(editTeamMember));
router.route("/addGithub/:id").post(asyncHandler(addOrEditgithub));
router
  .route("/uploadPic/:id")
  .post(upload.single("image"), asyncHandler(uploadPic));

module.exports = router;
