const { varLoop, letLoop } = require("./forLoop");

describe("displays the concept of single binding", () => {
  it("must return the last value for all the iteration ", () => {
    expect(varLoop()).toEqual([3, 3, 3]);
  });
});

describe("displays the concept of multiple binding in each iteration", () => {
  it("must return the respective value for each the iteration ", () => {
    expect(letLoop()).toEqual([0, 1, 2]);
  });
});
