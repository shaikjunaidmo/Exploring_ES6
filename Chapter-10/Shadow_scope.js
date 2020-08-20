let var_1 = "Hi iam global variable";
const shadowFunc = () => {
  let var_1 = "Hi iam local variable";
  if (true) {
    let var_1 = "Hi iam responsible for shadowing the outer variable ";
    return var_1; // shadows outer var_1
  }
};

console.log(shadowFunc());

module.exports = { shadowFunc };
