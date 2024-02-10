import express from "express";
import admincontroller from "../controllers/Admin";

const router = express.Router();
router.route("/getalluser").get(admincontroller.getalluser);
router.route("/deleteuser/:id").delete(admincontroller.deleteuser);

module.exports = router;
