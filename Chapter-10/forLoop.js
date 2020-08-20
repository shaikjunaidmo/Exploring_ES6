const varLoop = () => {
  arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(() => i);
  }
  return arr.map(x => x());
};

const letLoop = () => {
  arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(() => i);
  }
  return arr.map(x => x());
};

console.log(varLoop());
console.log(letLoop());

module.exports = { varLoop, letLoop };
