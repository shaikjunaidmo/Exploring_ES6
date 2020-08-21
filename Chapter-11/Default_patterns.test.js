const {
  defaultObject,
  defaultArray,
  nestedPatterns
} = require("./Default_patterns");

describe("demostrates the nested patterns concept", () => {
  it("must return the default values specified in the object", () => {
    expect(defaultObject()).toBe("x : 10 , y : 2");
  });
});

describe("demostrates the nested patterns concept", () => {
  it("must return the default values specified in the array", () => {
    expect(defaultArray()).toBe(
      "def : IT, a : 4 , b : undefined, c : 3 ,d : 3, e : 7 ,f : 7,g : 7 , h: 2"
    );
  });
});

describe("demostrates the nested patterns concept", () => {
  it("must return the default values specified in the nested array of objects", () => {
    expect(nestedPatterns()).toBe("number : 123 , number_1 : 234");
  });
});
