const removeFromArray = function (array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == element) {
      array.splice(i, 1);
      return array;
    }
  }
};

console.log(removeFromArray([1, 2, 3, 4], 4));

// let array = [1, 2, 3, 4];
// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] === 4) {
//     newArray = array.splice(i, 1);
//   }
// }
// console.log(newArray);
// console.log(array);

// // Do not edit below this line
// module.exports = removeFromArray;
