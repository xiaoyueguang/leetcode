/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let length = a.length
  let sLength = b.length
  if (sLength > length) {
    const tmp = length
    length = sLength
    sLength = tmp
  }

  let isCarry = false
  const tmp = []

  a = a.split('').reverse()
  b = b.split('').reverse()
  let i = 0
  for (; i < sLength; i++) {
    if (a[i] === b[i]) {
      tmp.unshift(isCarry ? '1' : '0')
      isCarry = a[i] === '1'
    } else {
      tmp.unshift(isCarry ? '0' : '1')
    }
  }
  for (; i < length; i++) {
    const num = a[i] || b[i]
    if (isCarry) {
      tmp.unshift(num === '1' ? '0' : 1)
      isCarry = num === '1'
    } else {
      tmp.unshift(num)
    }
  }
  if (isCarry) {
    tmp.unshift('1')
  }
  return tmp.join('')
}

console.log(addBinary('1', '11'))