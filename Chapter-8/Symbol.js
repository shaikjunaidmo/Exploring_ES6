//creating a symbol as a object key.
const sym_1 = Symbol("Hi iam a symbol 1 and this is just a description");
const sym_2 = Symbol("Hi iam a symbol 2 and this is just a description");

obj = {
  prop_1: "iam prop one",
  [sym_1]: " Iam a value of symbol key ",
  [sym_2]() {
    return "iam a symbol function";
  }
};

//comparing the symbols
const symEquality = (sym1, sym2) => sym1 === sym2;

module.exports = {
  obj,
  symEquality,
  sym_1,
  sym_2
};
