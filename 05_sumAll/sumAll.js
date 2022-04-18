const sumAll = function (num1, num2) {
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR";
  } else if (num1 < num2) {
    let sum = ((num2 - num1 + 1) / 2) * (num1 + num2);

    return sum;
  } else {
    let sum = ((num1 - num2 + 1) / 2) * (num1 + num2);
    return sum;
  }
};

console.log(sumAll(1, 4));
console.log(sumAll(123, 1));
console.log(sumAll("90", 2));
console.log(!Number.isInteger("90"));
// Do not edit below this line
module.exports = sumAll;
