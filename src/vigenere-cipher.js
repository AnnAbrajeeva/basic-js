const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  // constructor(val) {
  //     this.val = val 
  // }

  // encrypt(msg, key) {
  //   console.log(msg, key)
  //   if(!msg || !key) {
  //     throw new Error('Incorrect arguments!')
  //   }
  //   let en = "abcdefghijklmnopqrstuvwxyz".split("");
  //   let kf = Math.ceil(msg.length / key.length);

  // // console.log(key);
  // key = key.repeat(kf).toLowerCase();
  // msg = msg.toLowerCase()
  // // console.log(msg);

  // let arr = [];
  // let keyIdx = 0
  //   for (let i = 0; i < msg.length; i++) {
  //     if (en.indexOf(msg[i]) === -1) {
  //       arr.push(msg[i]);
  //     } else {
  //       let keyInd = en.indexOf(key[keyIdx]);
  //       let msgInd = en.indexOf(msg[i]);
  //       arr.push(en[(keyInd + msgInd) % en.length]);
  //       keyIdx++
  //     }
  //   }

  //     if(this.val || this.val === undefined) {
  //       return arr.join('').toUpperCase() 
  //     } else {
  //       return arr.reverse().join('').toUpperCase()
  //     }
  // }
  // decrypt(msg, key) {
  //   console.log(msg, key)
  //   if(!msg || !key) {
  //     throw new Error('Incorrect arguments!')
  //   }
  //   let en = "abcdefghijklmnopqrstuvwxyz".split("");
  //   let kf = Math.ceil(msg.length / key.length);
  //   key = key.repeat(kf);
  //   msg = msg.toLowerCase()
  
  //   let arr = [];
  //   let keyIdx = 0
  //     for (let i = 0; i < msg.length; i++) {
  //       if (en.indexOf(msg[i]) === -1) {
  //         arr.push(msg[i]);
  //       } else {
  //         let keyInd = en.indexOf(key[keyIdx]);
  //         let msgInd = en.indexOf(msg[i]);
  //         arr.push(en[(msgInd-keyInd+en.length)%en.length]);
  //         keyIdx++
  //       }
  //     }
  //     if(this.val || this.val === undefined) {
  //       return arr.join('').toUpperCase() 
  //     } else {
  //       return arr.reverse().join('').toUpperCase()
  //     }
  // }

  constructor(reverse) {
    this.reverse = reverse
  }


  encrypt(msg, key) {
    if(!msg || !key) {
      throw new Error('Incorrect arguments!')
    }
    let en = "abcdefghijklmnopqrstuvwxyz".split("");
    let kf = Math.ceil(msg.length / key.length);
    key = key.repeat(kf).toLowerCase()
    msg = msg.toLowerCase()

    let first = 'a'.charCodeAt(0)

    let res = []

    for(let i=0, j=0; i<msg.length; i++, j++) {
      if(en.indexOf(msg[i]) === -1) {
        res.push(msg[i])
        j--
      } else {
        let msgInd = msg.charCodeAt(i) - first
        let keyInd = key.charCodeAt(j) - first

        res.push(String.fromCharCode(first + (msgInd + keyInd) % en.length))
      }
    }

    if(this.reverse || this.reverse === undefined) {
        return res.join('').toUpperCase() 
      } else {
        return res.reverse().join('').toUpperCase()
      }
    }

    decrypt(msg, key) {
      if(!msg || !key) {
        throw new Error('Incorrect arguments!')
      }
      let en = "abcdefghijklmnopqrstuvwxyz".split("");
      let kf = Math.ceil(msg.length / key.length);
      msg = msg.toLowerCase()
      key = key.repeat(kf).toLowerCase()
  
      let first = 'a'.charCodeAt(0)
  
      let res = []
  
      for(let i=0, j=0; i<msg.length; i++, j++) {
        if(en.indexOf(msg[i]) === -1) {
          res.push(msg[i])
          j--
        } else {
          let msgInd = msg.charCodeAt(i) - first
          let keyInd = key.charCodeAt(j) - first
  
          res.push(String.fromCharCode(first + (msgInd - keyInd + en.length) % en.length))
        }
      }
  
      if(this.reverse || this.reverse === undefined) {
          return res.join('').toUpperCase() 
        } else {
          return res.reverse().join('').toUpperCase()
        }
      }

}

module.exports = {
  VigenereCipheringMachine
};



