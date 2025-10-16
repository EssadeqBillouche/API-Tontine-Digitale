import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  score: { type: Number, default: 1 },
  joinedAt: { type: Date, default: Date.now },
});

const GroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  creatorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  contributionAmount: { type: Number, required: true },
  maxMembers: { type: Number, required: true },
  members: { type: [MemberSchema],default: [] },
  currentRound: {type: Number, default: 0 },
  status: {
    type: String,
    enum: ["Pending", "Active", "Completed", "Closed"],
    default: "Pending",
  },
  createdAt: { type: Date,default: Date.now },
  updatedAt: { type: Date,default: Date.now },
});

GroupSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.model("Group", GroupSchema);
