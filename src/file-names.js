const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
  if(!names.length) return []
  let count = 0
  let res = []
  let reg = /\w+\(\d\)/

  for(let i = 0; i<names.length; i++) {   
    if(res.indexOf(names[i]) !== -1) {
      console.log(reg.test(names[i]))
      if(reg.test(names[i])) {
        let num = names[i]+'('+count+')'
        res.push(num)
      } else { 
        count+=1
        let num = names[i]+'('+count+')'
        res.push(num)
      }      
    } else {
      res.push(names[i])
    }
  }
  return res
}

module.exports = {
  renameFiles
};
