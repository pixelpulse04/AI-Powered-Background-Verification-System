const express = require("express");
const router = express.Router();
const VerificationLog = require("../models/VerificationLog");

// Get all logs
router.get("/", async (req, res) => {
  const logs = await VerificationLog.find().populate("candidateId");
  res.json(logs);
});

// Add new log
router.post("/", async (req, res) => {
  const { candidateId, status, details } = req.body;

  const newLog = new VerificationLog({
    candidateId,
    status,
    details,
  });

  await newLog.save();
  res.status(201).json(newLog);
});

module.exports = router;
