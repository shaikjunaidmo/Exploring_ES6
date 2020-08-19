const mathFunctions = number => {
  res = [];
  for (let x of number) {
    console.log(`sign of ${x} :`, Math.sign(x));
    res.push(Math.sign(x));
    console.log(`rounding of ${x} :`, Math.trunc(x));
    res.push(Math.trunc(x));
    console.log(`cube root of ${x} :`, Math.cbrt(x));
    res.push(Math.cbrt(x));
    console.log(`log base 2 of ${x} :`, Math.log2(x));
    res.push(Math.log2(x));
    console.log(`log base 10 of ${x} :`, Math.log10(x));
    res.push(Math.log10(x));
  }
  return res;
};

mathFunctions([-8, 0, NaN, Infinity, -Infinity, 3.9, 8, 100]);

module.exports = mathFunctions;
