const { iter } = require("./Object_iterator");
describe("iterating our the object properties", () => {
  it("should return the array with all the properties ", () => {
    expect(iter()).toEqual(["shaik", "junaid", "mohammad"]);
  });
});
