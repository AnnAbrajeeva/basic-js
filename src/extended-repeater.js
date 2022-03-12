const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let string = [];
  let s = options.separator ? options.separator : "+";
  let sep = options.additionSeparator ? options.additionSeparator : "|";
  let add = "";

  if(options.addition) {
    add = options.addition
   } 
   if(options.additionRepeatTimes) {
    let adds = []
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      let addition = typeof options.addition !== 'string' ? String(options.addition) : options.addition
      adds.push(addition)
    }
    add = adds.join(sep)
   }
 
  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      string.push(str + add);
    }
  } else {
    string.push(str + add);
  }

  return string.join(`${s}`);
}

module.exports = {
  repeater,
};
