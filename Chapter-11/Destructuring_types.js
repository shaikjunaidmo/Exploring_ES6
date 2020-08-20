const objDestructure = () => {
  let obj = { name: "junaid", age: 23 };
  let { name, age } = obj;
  return `My name is ${name} and my age is ${age}`;
};

const arrayDestructure = () => {
  let arr = ["a", "b", "c", "d"];
  let [x, ...y] = arr;
  return y;
};

const funcDestructuring = param => {
  let [x, y, z] = param;
  return [x, y, z].map(x => x);
};
module.exports = { objDestructure, arrayDestructure, funcDestructuring };
