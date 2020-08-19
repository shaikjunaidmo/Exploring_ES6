const numberProperties = number => {
  res = [];
  for (let x of number) {
    console.log(`Is ${x} Finite :`, Number.isFinite(x));
    res.push(Number.isFinite(x));
    console.log(`Is ${x} NaN :`, Number.isNaN(x));
    res.push(Number.isNaN(x));
    console.log(`Is ${x} Integer :`, Number.isInteger(x));
    res.push(Number.isInteger(x));
    console.log(`Is ${x} SafeInteger :`, Number.isSafeInteger(x));
    res.push(Number.isSafeInteger(x));
  }
  return res;
};

numberProperties([
  Infinity,
  -Infinity,
  NaN,
  123,
  "123",
  2.13,
  9007199254740992
]);

module.exports = numberProperties;
