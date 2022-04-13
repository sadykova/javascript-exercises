const removeFromArray = function (array, element, ...moreElements) {
  if (arguments.length === 1) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === element) {
        array.splice(i, 1);
        return array;
      }
    }
  } else {
    let args = Array.from(arguments);
    let newArgs = args.slice(1);

    array = array.filter((item) => !newArgs.includes(item));
    return array;
  }
};

console.log(removeFromArray([1, 2, 3, 4], 3, 4));
console.log(removeFromArray(["hello", 1, 2, 3], "hello", "taco"));
console.log(removeFromArray[(1, 2, 3, 4)], 1, 2, 3, 4);
console.log(removeFromArray[((1, "1", 2, 3), "1")]);

// Do not edit below this line
module.exports = removeFromArray;
