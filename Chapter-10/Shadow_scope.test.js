const { shadowFunc } = require("./Shadow_scope");

describe("This demostrates the shadowing concept", () => {
  it("should return shadowed variable", () => {
    expect(shadowFunc()).toBe(
      "Hi iam responsible for shadowing the outer variable "
    );
  });
});
