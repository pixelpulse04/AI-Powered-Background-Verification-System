const tf = require("@tensorflow/tfjs-node");

const assessRisk = async (data) => {
  const model = await tf.loadLayersModel("file://./risk-model/model.json");

  const inputData = tf.tensor2d([data], [1, data.length]);
  const prediction = model.predict(inputData);
  const riskScore = prediction.dataSync()[0];

  return riskScore > 0.5 ? "High Risk" : "Low Risk";
};

module.exports = assessRisk;
