import express from "express";
import fileController from "../controllers/file.controller";

const router = express.Router();

router.route("/all").get(fileController.getAll);
router.route("/:id").get(fileController.getOne);
router.route("/:id").patch(fileController.updateOne);
router.route("/:id").delete(fileController.deleteOne);

export default router;
