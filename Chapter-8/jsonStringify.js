function symbolReplacer(key, value) {
  if (typeof value === "symbol") {
    return "@@" + Symbol.keyFor(value) + "@@";
  }
  return value;
}

const MY_SYMBOL = Symbol.for("HELLO IAM A SYMBOL");
let obj = { name: "junaid", sym: [MY_SYMBOL] };

module.exports = { obj, symbolReplacer };
