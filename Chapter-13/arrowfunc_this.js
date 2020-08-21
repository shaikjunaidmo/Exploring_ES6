var glob = "iam a gobal variable";

obj = {
  glob: "Hii iam a local variable with glob as a name",
  myMethod: () => this.glob,

  funny() {
    const myNested = () => {
      return this.glob;
    };
    return myNested();
  }
};
console.log(obj.funny());
module.exports = {
  obj
};
