const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  documents: [
    {
      name: String,
      url: String,
      type: String,
      status: { type: String, enum: ["pending", "verified", "failed"], default: "pending" }
    }
  ],
  riskScore: { type: Number, default: 0 },
  status: { type: String, enum: ["verified", "in_progress", "failed"], default: "in_progress" },
  feedback: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Candidate", candidateSchema);
