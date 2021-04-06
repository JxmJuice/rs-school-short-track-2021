/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  let temp1;
  let temp2;
  let s1n = s1;
  let s2n = s2;
  for (let i = 0; i < s1n.length; i++) {
    for (let j = 0; j < s2n.length; j++) {
      if (s1n[i] === s2n[j]) {
        res++;
        temp1 = s1n.split('');
        temp1.splice(i, 1);
        s1n = temp1.join('');
        temp2 = s2n.split('');
        temp2.splice(j, 1);
        s2n = temp2.join('');
        i--;
        break;
      }
    }
  }
  return res;
}

module.exports = getCommonCharacterCount;
