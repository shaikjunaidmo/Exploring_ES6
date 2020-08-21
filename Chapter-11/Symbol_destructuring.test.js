const { symbolDestructuring } = require("./Symbol_destructuring");

describe("demostrates the destructuring using the symbols", () => {
  it("it must return the value as well as the default value ", () => {
    expect(symbolDestructuring()).toBe(
      `symbol value is "iam a symbol" and default value is "123" `
    );
  });
});
