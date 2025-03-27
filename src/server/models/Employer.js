const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contactNumber: { type: String, required: true },
  candidates: [{ type: mongoose.Schema.Types.ObjectId, ref: "Candidate" }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Employer", employerSchema);
