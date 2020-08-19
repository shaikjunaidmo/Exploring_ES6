const { obj, symEquality, sym_1, sym_2 } = require("./Symbol");

describe("checking the symbol equality", () => {
  it("should return the correct boolean i.e false", () => {
    expect(symEquality(Symbol(), Symbol())).toBe(false);
  });
});

describe("retrieveing the object's property", () => {
  it("should return the correct value ", () => {
    expect(obj[sym_1]).toBe(" Iam a value of symbol key ");
  });
});

describe("retrieveing the object's function property", () => {
  it("should return the correct value ", () => {
    expect(obj[sym_2]()).toBe("iam a symbol function");
  });
});
