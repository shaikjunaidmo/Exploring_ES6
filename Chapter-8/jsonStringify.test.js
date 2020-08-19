const { obj, symbolReplacer } = require("./jsonStringify");

describe("converts the js data into json strings", () => {
  it("should return the json string", () => {
    expect(JSON.stringify(obj, symbolReplacer)).toBe(
      `{"name":"junaid","sym":["@@HELLO IAM A SYMBOL@@"]}`
    );
  });
});
