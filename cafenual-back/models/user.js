import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRountds = 10;
const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      // 중복되면 에러띄워줌
      trim: true,
      // 공백 잘라줌
      lowercase: true,
      // 소문자로받아줌
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 6,
    },
    wage: {
      type: Number,
      trim: true,
      default: 8720,
    },
    status: {
      type: String,
      enum: ["재직자", "퇴직자"],
      default: "재직자",
    },
    role: {
      type: String,
      enum: ["employer", "employee"],
      default: "employee",
    },
    token: {
      type: String,
    },
  },
  { timestamps: true }
);
// 비번을 db에 암호화 하여 저장
UserSchema.methods.setPassword = async function (password) {
  const result = await bcrypt.hash(password, saltRountds);
  this.password = result;
};

// 입력받은 비번이 db에 있는 비번이랑 같은지 확인
UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.password);
  return result;
};

//토큰 생성
UserSchema.methods.generateToken = async function () {
  const token = jwt.sign(
    {
      _id: this._id,
      email: this.email,
      name: this.name,
      role: this.role,
    },
    process.env.JWT_SECRET
  );
  this.token = token;
  await this.save();
  return token;
};

const User = mongoose.model("User", UserSchema);
export default User;
