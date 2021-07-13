import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

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
      enum: ["admin", "parttime"],
      default: "parttime",
    },
    token: {
      type: String,
    },
  },
  { timestamps: true }
);

UserSchema.methods.setPassword = async function (password) {
  const result = await bcrypt.hash(password, saltRountds);
  this.password = result;
};

const User = mongoose.model("User", UserSchema);
export default User;
