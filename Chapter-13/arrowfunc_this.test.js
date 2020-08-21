const { obj } = require("./arrowfunc_this");

describe("demonstrating the lexical behaviour of the this inside of the arrow functions", () => {
  it("must return the correct this value inside the arrow functions", () => {
    expect(obj.funny()).toBe("Hii iam a local variable with glob as a name");
  });
});

describe("demonstrating the lexical behaviour of the this inside of the arrow functions", () => {
  it("must return the correct this value inside the arrow functions", () => {
    expect(obj.myMethod()).toBe(undefined);
  });
});
