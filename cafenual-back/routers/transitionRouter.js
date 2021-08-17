import express from "express";
import * as transitionCtrl from "../controlers/transitionController";

const router = express.Router();

router.post("/createTransition", transitionCtrl.createTransition);
router.get("/readTransition", transitionCtrl.readTransition);
router.get(
  "/readTransitionDetail/:transitionId?",
  transitionCtrl.readTransitionDetail
);
router.patch(
  "/updateTransition/:transitionId?",
  transitionCtrl.updateTransition
);
router.delete("/deleteTransition/:transitionId?", transitionCtrl.deleteTransition);
export default router;
