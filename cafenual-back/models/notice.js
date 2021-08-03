import mongoose, { Schema } from "mongoose";

const NoticeSchema = new Schema(
  {
    title: {
      type: String,
      maxlength: 50,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    veryimportant: {
      type: Boolean,
      default: false,
    },
    important: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Notice = mongoose.model("Notice", NoticeSchema);
export default Notice;
