import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect(
    "mongodb+srv://admin:admin@cafenal.vlqpx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(console.log("DB가 실행되었다."))
  .catch((err) => console.log(err));

const handleListening = () => {
  console.log("서버가 실행되었습니다. : http://localhost:4000");
};

app.listen(4000, handleListening);
