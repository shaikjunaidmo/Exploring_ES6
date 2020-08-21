let television = {
  size: "55 inches",
  spec: "OMLED",
  pros: "smart android TV",
  type: "QLED"
};

const DEFAULT = {
  type: "LED",
  PS4compatible: true,
  XBOXcompatible: true
};

let sony = {
  name: "sony"
};
let LG = {
  name: "LG"
};

Object.assign(sony, DEFAULT, television, { thickness: 0.99 });

Object.assign(LG, DEFAULT, television, { type: "QLED" });

module.exports = { sony, LG };
