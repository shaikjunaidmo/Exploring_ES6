const { compareCodepoints, reverseCodepoints } = require("./Codepoint_escape");

describe("comparing the two code points", () => {
  it("must return the correct boolean wrt to the codepoints", () => {
    expect(compareCodepoints("\u{1F680}", "\uD83D\uDE80")).toBetruthy;
  });
});

describe("reveresing the code point", () => {
  it("must return the correct reveresed form of the codepoint", () => {
    expect(reverseCodepoints("x\uD83D\uDE80y")).toBe("y\uD83D\uDE80x");
  });
});
