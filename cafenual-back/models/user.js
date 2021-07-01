import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
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
});

const User = mongoose.model("User", UserSchema);
export default User;
