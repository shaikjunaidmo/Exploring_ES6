const { ferrari } = require("./generator_method");

describe("demostrates the concept of generators in classes", () => {
  it("it must return correct statement ", () => {
    expect(ferrari()).toEqual(["ferrari", "is", "super fast", "sportscar"]);
  });
});
