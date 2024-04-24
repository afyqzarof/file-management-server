import express from "express";
import fileController from "../controllers/file.controller";

const router = express.Router();

router.route("/all").get(fileController.getAll);

export default router;
