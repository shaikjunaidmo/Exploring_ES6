const { mycar } = require("./subclass");

describe("demostrates the concept of classes", () => {
  it("it must return correct statement ", () => {
    expect(mycar.show()).toBe("I have a Ford, it is a Mustang");
  });
});
