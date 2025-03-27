const express = require("express");
const router = express.Router();
const Candidate = require("../models/Candidate");

// Get all candidates
router.get("/", async (req, res) => {
  const candidates = await Candidate.find();
  res.json(candidates);
});

// Add a new candidate
router.post("/", async (req, res) => {
  const { name, email, phone } = req.body;

  const newCandidate = new Candidate({
    name,
    email,
    phone,
  });

  await newCandidate.save();
  res.status(201).json(newCandidate);
});

// Get candidate by ID
router.get("/:id", async (req, res) => {
  const candidate = await Candidate.findById(req.params.id);
  res.json(candidate);
});

// Update candidate status
router.put("/:id", async (req, res) => {
  const { status, riskScore, feedback } = req.body;

  const updatedCandidate = await Candidate.findByIdAndUpdate(
    req.params.id,
    { status, riskScore, feedback },
    { new: true }
  );

  res.json(updatedCandidate);
});

module.exports = router;
