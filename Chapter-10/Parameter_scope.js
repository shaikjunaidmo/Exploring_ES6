let var_1 = "Hi iam global variable ";

const defScope = (func = x => var_1) => {
  let var_1 = "Hi iam local variable";
  return func();
};

const defFuncScope = func => {
  let var_1 = "Hi iam another local variable";
  return func();
};

const callFunc = () => {
  return defFuncScope((func = x => var_1));
};

module.exports = { callFunc, defScope };
