import express from "express";
import uploadController from "../controllers/upload.controller";

const router = express.Router();

router.route("/").post(uploadController.uploadImg);

export default router;
