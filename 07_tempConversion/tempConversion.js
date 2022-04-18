const ftoc = function (temp) {
  let celsius = (temp - 32) * (5 / 9);
  return Math.round(celsius * 10) / 10;
};

const ctof = function (temp) {
  let f = temp * (9 / 5) + 32;
  return Math.round(f * 10) / 10;
};

console.log(ftoc(100));
console.log(ftoc(-100));
console.log(ctof(0));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
