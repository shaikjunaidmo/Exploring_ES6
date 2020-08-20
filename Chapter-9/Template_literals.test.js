const { templateLiteral } = require("./Template_literals");

describe("template literals are used to interpolate the data and displaying in multiple lines", () => {
  it("should return the correct string ", () => {
    expect(templateLiteral("junaid", "shaik"))
      .toEqual(`Now i can return the string by interpolating the elements 
without using the "+" symbols in between 
and the parameters are junaid and shaik`);
  });
});
