class IterableArguments {
  constructor(...args) {
    this.args = args;
  }
  *[Symbol.iterator]() {
    for (let arg of this.args) {
      yield arg;
    }
  }
}
const ferrari = () => {
  arr = [];
  for (let x of new IterableArguments(
    "ferrari",
    "is",
    "super fast",
    "sportscar"
  )) {
    arr.push(x);
    console.log(x);
  }
  return arr;
};

module.exports = { ferrari };
