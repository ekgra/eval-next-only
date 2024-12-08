import mongoose from "mongoose";

const InterestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  interest: { type: String, required: true },
  profilePhoto: { type: String, required: false },
});

export default mongoose.models.Interest || mongoose.model("Interest", InterestSchema);
