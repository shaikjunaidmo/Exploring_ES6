function taggedFunction(strings, ...expressions) {
  console.log(strings[0] + expressions[0] + expressions[1]);
  return strings.length + expressions.length;
}

let firstName = "tagged ";
let lastName = "literal";

module.exports = { taggedFunction, firstName, lastName };
