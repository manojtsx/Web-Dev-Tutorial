/*
Q. Write a JavaScript function findMedian(arr) that takes an array of numbers as input and returns the media value. If the arrray has an even number of elementes,return the average of the two middle values.

\For example: the median of 3,3,5,9,15 is 5. If there is an even number of observations, then there is no single middle value; the median is then usually defined to be the mean of the two middle values: so the median of 3,5,7,9 is (5-7)/2 = 6.

todo Tips:
1.Sort the array in ascending order.
2. If the array has an odd number of elements, the median is the middle element.
3. If the array has an even number of elements, the median is the average of the two middle elements.

console.log(findMedian([3,3,5,9,15])) //Output: 5
console.log(findMedian([3,5,7,9])) //Output: 6
console.log(findMedian([1,2,3,4,5])) //Output: 3
*/
function findMedian(arr) {
  const len = arr.length;
  if (len === 0) {
    return null;
  }
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  if (len % 2 !== 0) {
    return arr[Math.floor(len / 2)];
  } else {
    return (arr[len / 2] + arr[len / 2 - 1]) / 2;
  }
}
module.exports = findMedian;
