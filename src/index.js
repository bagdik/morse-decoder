const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const wordArr = expr.split('**********');
    const byLetters = [];
    wordArr.forEach((item, index) => {
      const encodedWord = [];
      for (let i = 0; i < item.length; i += 10) {
        encodedWord.push(item.substr(i, 10));
      }
        
      const decodedWord = encodedWord.map(item => {
        let res = '';
        for (let i = 0; i < item.length; i += 2) {
          if (item.substr(i, 2) === '10') {
            res += '.';
          } else if (item.substr(i, 2) === '11') {
            res += '-';
          }
        }
        return res;
      }).map(item => MORSE_TABLE[item]).join('');
      byLetters.push(decodedWord);
    });
    return byLetters.join(' ');
}

module.exports = {
    decode
}