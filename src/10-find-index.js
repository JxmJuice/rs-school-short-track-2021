/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let i = 0;
  let temp;
  let j = (array.length - 1);
  while (i < j) {
    temp = (i + j) / 2;
    if (value > array[temp]) {
      i = temp + 1;
    } else {
      j = temp;
    }
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

module.exports = findIndex;
