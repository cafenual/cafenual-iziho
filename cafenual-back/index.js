import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRouter from "./routers/userRouter";
import noticeRouter from "./routers/noticeRouter";
import transitionRouter from "./routers/transitionRouter";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("DB가 실행되었다."))
  .catch((err) => console.log(err));

const handleListening = () => {
  console.log(`서버가 실행되었습니다. : http://localhost:${process.env.PORT}`);
};

app.use("/api/user", userRouter);
app.use("/api/notice", noticeRouter);
app.use("/api/transition", transitionRouter);

app.listen(process.env.PORT, handleListening);
