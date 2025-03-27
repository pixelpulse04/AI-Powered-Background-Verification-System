const axios = require("axios");

const validateHistory = async (candidateId) => {
  const response = await axios.get(
    `https://criminal-record-api.com/check/${candidateId}`
  );

  return response.data;  // JSON with criminal records
};

const validateEmployment = async (candidateId) => {
  const response = await axios.get(
    `https://employment-history-api.com/verify/${candidateId}`
  );

  return response.data;  // JSON with employment history
};

module.exports = { validateHistory, validateEmployment };
