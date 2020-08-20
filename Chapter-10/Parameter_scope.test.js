const { callFunc, defScope } = require("./Parameter_scope");

describe("displays the global value", () => {
  it("must return the global value ", () => {
    expect(defScope()).toBe("Hi iam global variable ");
    expect(callFunc()).toBe("Hi iam global variable ");
  });
});
