const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let res = []
  n = n.toString()
  for(let i=0; i<n.length; i++) {
    let num = n.split('')
    num.splice(i, 1)
    res.push(num.join(''))
  }
  return Math.max(...res)
}

module.exports = {
  deleteDigit
};
