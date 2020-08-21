const defaultObject = () => {
  let { prop: y = 2 } = { prop: undefined };
  let { prop: x = 10 } = { prop1: 11, prop2: 10 };
  return `x : ${x} , y : ${y}`;
};

const defaultArray = () => {
  let [x, y, z, def = "IT"] = ["CSE", "ECE", "EEE"]; // DEF = 'IT'
  let [a = 3, b] = [4]; /// a = 4 and b = undefined
  let [c = 3, d = c] = []; // c=3; d=3
  let [e = 3, f = e] = [7]; // e=7; f=7
  let [g = 3, h = g] = [7, 2]; // g=7; h=2
  return `def : ${def}, a : ${a} , b : ${b}, c : ${c} ,d : ${d}, e : ${e} ,f : ${f},g : ${g} , h: ${h}`;
};

const nestedPatterns = () => {
  let [{ property: number } = { property: 123 }] = [];
  let [{ property_1: number_1 = 234 }] = [{}];
  return `number : ${number} , number_1 : ${number_1}`;
};

module.exports = { defaultObject, defaultArray, nestedPatterns };
