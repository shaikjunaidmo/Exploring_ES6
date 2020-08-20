const {
  objDestructure,
  arrayDestructure,
  funcDestructuring
} = require("./Destructuring_types");

describe("displays the obj property keys accessing and storing by destructuring ", () => {
  it("must return the correct key from the object", () => {
    expect(objDestructure()).toBe("My name is junaid and my age is 23");
  });
});

describe("displays the array value accessing and storing by destructuring ", () => {
  it("must return the correct value from the array", () => {
    expect(arrayDestructure()).toEqual(["b", "c", "d"]);
  });
});

describe("displays the array value accessing and storing by destructuring ", () => {
  it("must return the correct value from the array passed as a parameter", () => {
    expect(funcDestructuring(["a", "b", "c"])).toEqual(["a", "b", "c"]);
  });
});
