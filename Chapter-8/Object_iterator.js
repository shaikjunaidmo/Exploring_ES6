let obj = {
  prop_1: ["shaik", "junaid", "mohammad"],
  prop_2: ["name", "age", "gender"],
  [Symbol.iterator]() {
    let index = 0;
    const own = this;
    return {
      next() {
        if (index < own.prop_1.length) {
          return { value: own.prop_1[index++] };
        } else {
          return { done: true };
        }
      }
    };
  }
};
const iter = () => {
  let res = [];
  for (let x of obj) {
    res.push(x);
  }
  return res;
};
module.exports.iter = iter;
