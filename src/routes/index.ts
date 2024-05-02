import express from "express";
import MediaController from "../controllers/media.controller";

const router = express.Router();

router.use('/media', MediaController.get)

export default router