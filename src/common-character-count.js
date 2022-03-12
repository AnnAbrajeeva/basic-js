const { NotImplementedError } = require('../extensions/index.js');

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
  let count = 0;
  let str1 = s1.split('').sort()
  let str2 = s2.split('').sort()
  for (let i = 0; i < s2.length; i++) {
    if (str2.indexOf(str1[i]) !== -1) {
      count++;
      let ind = str2.indexOf(str1[i])
      str2.splice(ind, 1)
      str1.splice(i, 1)
      i--
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
