const { sony, LG } = require("./Object_assign");

describe("demostrates the usage of the Object.assign() method and use of default values in it", () => {
  it("must return correct properties in it", () => {
    expect(JSON.stringify(sony)).toBe(
      `{"name":"sony","type":"QLED","PS4compatible":true,"XBOXcompatible":true,"size":"55 inches","spec":"OMLED","pros":"smart android TV","thickness":0.99}`
    );
  });
});

describe("demostrates the usage of the Object.assign() method and use of default values in it", () => {
  it("must return correct properties in it", () => {
    expect(JSON.stringify(LG)).toBe(
      `{"name":"LG","type":"QLED","PS4compatible":true,"XBOXcompatible":true,"size":"55 inches","spec":"OMLED","pros":"smart android TV"}`
    );
  });
});
