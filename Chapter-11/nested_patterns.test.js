const { nestedPatterns } = require("./nested_patterns");

describe("this demonstrates the nested patterns", () => {
  it("it must return the correct value", () => {
    expect(nestedPatterns()).toBe(
      "Hello my first name is junaid and my full name is shaik junaid mohammad"
    );
  });
});
