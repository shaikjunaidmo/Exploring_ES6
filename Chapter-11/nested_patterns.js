const nestedPatterns = () => {
  let obj = {
    name: [
      { firstName: "junaid", LastName: "shaik" },
      { fullName: "shaik junaid mohammad" }
    ],
    age: "male",
    married: false
  };
  let {
    name: [{ firstName }]
  } = obj;
  let {
    name: [, { fullName }]
  } = obj;

  return `Hello my first name is ${firstName} and my full name is ${fullName}`;
};
console.log(nestedPatterns());
module.exports = { nestedPatterns };
