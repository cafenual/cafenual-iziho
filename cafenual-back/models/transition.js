import mongoose, { Schema } from "mongoose";
const TransitionSchema = new Schema(
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
    writer: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User"
    },
  },
  { timestamps: true }
);

const Transition = mongoose.model("Transition", TransitionSchema);
export default Transition;
