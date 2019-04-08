/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const INT_ROMAN_MAP = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  }
  const tmp = {
    1: 0,
    10: 2,
    100: 4,
    1000: 6
  }

  const INTS = Object.keys(INT_ROMAN_MAP).map(Number)
  let str = ''
  let divisor = 1000
  while (divisor >= 1) {
    const n = Math.floor(num / divisor)
    num = num - (divisor * n)
    const x = INTS.findIndex(n => divisor === n)
    switch (n) {
      case 1:
        str = str + INT_ROMAN_MAP[INTS[x]]
        break
      case 2:
        str = str + INT_ROMAN_MAP[INTS[x]] + INT_ROMAN_MAP[INTS[x]]
        break
      case 3:
        str = str + INT_ROMAN_MAP[INTS[x]] + INT_ROMAN_MAP[INTS[x]] + INT_ROMAN_MAP[INTS[x]]
        break
      case 4:
        str = str + INT_ROMAN_MAP[INTS[x]] + INT_ROMAN_MAP[INTS[x + 1]]
        break
      case 5:
        str = str + INT_ROMAN_MAP[INTS[x + 1]]
        break
      case 6:
        str = str + INT_ROMAN_MAP[INTS[x + 1]] + INT_ROMAN_MAP[INTS[x]]
        break
      case 7:
        str = str + INT_ROMAN_MAP[INTS[x + 1]] + INT_ROMAN_MAP[INTS[x]] + INT_ROMAN_MAP[INTS[x]]
        break
      case 8:
        str = str + INT_ROMAN_MAP[INTS[x + 1]] + INT_ROMAN_MAP[INTS[x]] + INT_ROMAN_MAP[INTS[x]] + INT_ROMAN_MAP[INTS[x]]
        break
      case 9:
        str = str + INT_ROMAN_MAP[INTS[x]] + INT_ROMAN_MAP[INTS[x + 2]]
        break
    }

    divisor = divisor / 10
  }
  return str
};
