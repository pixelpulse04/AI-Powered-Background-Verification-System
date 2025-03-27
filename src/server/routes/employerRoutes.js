const express = require("express");
const router = express.Router();
const Employer = require("../models/Employer");

// Get all employers
router.get("/", async (req, res) => {
  const employers = await Employer.find().populate("candidates");
  res.json(employers);
});

// Add a new employer
router.post("/", async (req, res) => {
  const { companyName, email, contactNumber } = req.body;

  const newEmployer = new Employer({
    companyName,
    email,
    contactNumber,
  });

  await newEmployer.save();
  res.status(201).json(newEmployer);
});

module.exports = router;
