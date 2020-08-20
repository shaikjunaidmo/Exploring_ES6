const { taggedFunction, firstName, lastName } = require("./Tagged_functions");

describe("returning the string with both string and expressions", () => {
  it("should return the corret expressions", () => {
    expect(taggedFunction`Hello iam a ${firstName} ${lastName}`).toBe(5);
  });
});
