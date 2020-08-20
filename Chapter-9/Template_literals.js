function templateLiteral(firstName, lastName) {
  return `Now i can return the string by interpolating the elements 
without using the "+" symbols in between 
and the parameters are ${firstName} and ${lastName}`;
}

module.exports = { templateLiteral };
