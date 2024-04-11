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

router.route("/login").post(asyncHandler(login));
router.route("/getTeamDetails").get(asyncHandler(getTeamDetails));
router.route("/addMember").post(asyncHandler(addTeamMemeber));
router.route("/removeMember/:id").delete(asyncHandler(removeMember));
router.route("/editMember/:id").put(asyncHandler(editTeamMember));
router.route("/addGithub/:id").post(asyncHandler(addOrEditgithub));
router.route("/uploadPic/:id").post(asyncHandler(uploadPic));

module.exports = router;
