const natural = require("natural");

const validateText = (inputText, keywords) => {
  const tokenizer = new natural.WordTokenizer();
  const tokens = tokenizer.tokenize(inputText.toLowerCase());

  const matchedKeywords = keywords.filter((keyword) =>
    tokens.includes(keyword.toLowerCase())
  );

  return matchedKeywords.length > 0;
};

module.exports = validateText;
