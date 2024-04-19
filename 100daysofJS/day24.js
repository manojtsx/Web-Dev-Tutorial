/*
Q. Write a function called findMode that takes an array of numbers as input and returns the mode of the array (the number that appears most frequently)./

console.log(findMode([1,2,2,3,1,4,2])) ;OUTPUT : 2

CONSTRAINTS:
1.  The input array will always contain at least one element.
2. The mode will always be unique (i.e. there won't be multiple numbers with the same highest.)

*/
function findMode(arr) {
  let counts = {};
  let maxCount = 0;
  let mode = [];
  for (let num of arr) {
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
    if (counts[num] > maxCount) {
      maxCount = counts[num];
      mode = [num];
    } else if (counts[num] === maxCount) {
      mode.push(num);
    }
  }
  return Number(mode[0]);
}
module.exports = findMode;
