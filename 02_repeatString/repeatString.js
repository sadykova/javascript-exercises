const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  } else {
    return string.repeat(num);
  }
};

console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;
