const compareCodepoints = (code_1, code_2) => {
  return code_1 === code_2;
};

const reverseCodepoints = codepoint => {
  return [...codepoint].reverse().join("");
};

module.exports = { compareCodepoints, reverseCodepoints };
