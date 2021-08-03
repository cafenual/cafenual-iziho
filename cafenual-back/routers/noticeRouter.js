import express from "express";
import * as noticeCtrl from "../controlers/noticeController";
const router = express.Router();

router.post("/create", noticeCtrl.createNoitce);
router.get("/readNotice", noticeCtrl.readNoitce);
router.get("/read/:noticeId", noticeCtrl.readNoitceDetail);
router.delete("/delete/:noticeId", noticeCtrl.deleteNotice);
router.patch("/update", noticeCtrl.updateNoitce);

export default router;
