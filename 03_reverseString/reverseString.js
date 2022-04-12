const reverseString = function (string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
};

console.log(reverseString("hello"));
console.log(reverseString("it is gonna be Okay"));
console.log(reverseString(""));

// Do not edit below this line
module.exports = reverseString;
