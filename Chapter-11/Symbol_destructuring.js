const symbolDestructuring = () => {
  const sym = Symbol();
  let obj = {
    name: "junaid",
    age: 22,
    gender: "male",
    [sym]: "iam a symbol"
  };
  let { [sym]: symbolValue } = obj;
  let { [obj]: value = 123 } = obj;
  return `symbol value is "${symbolValue}" and default value is "${value}" `;
};
console.log(symbolDestructuring());
module.exports = { symbolDestructuring };
