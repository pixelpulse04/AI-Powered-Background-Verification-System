const mongoose = require("mongoose");

const verificationLogSchema = new mongoose.Schema({
  candidateId: { type: mongoose.Schema.Types.ObjectId, ref: "Candidate" },
  status: { type: String, enum: ["pending", "verified", "failed"], default: "pending" },
  details: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("VerificationLog", verificationLogSchema);
