const func = require("./Number_properties");

describe("checking Number properties upon the array of numbers", () => {
  it("should return the correct boolean values for the numbers", () => {
    expect(
      func([Infinity, -Infinity, NaN, 123, "123", 2.13, 9007199254740992])
    ).toEqual([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      true,
      false,
      true,
      true,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      true,
      false,
      true,
      false
    ]);
  });
});
