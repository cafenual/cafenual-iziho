import express from "express";
import * as transitionCtrl from "../controlers/transitionController";

const router = express.Router();

router.post("/create", transitionCtrl.createTransition);

export default router;