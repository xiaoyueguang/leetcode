/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  /** 字符长度 */
  const length = s.length
  if (length < 2) return s
  /** 当前获取到最长的长度 */
  let palindromicStr = ''
  /** start 为起始点 */
  for (let start = 0; start < length; start++) {
    const strABBA = findPalindromicByABBA(s, start)
    const strABA = findPalindromicByABA(s, start)
    const longPalindromic = strABA.length > strABBA.length ? strABA : strABBA
    palindromicStr = palindromicStr.length > longPalindromic.length ? palindromicStr : longPalindromic
  }
  return palindromicStr

  // 两种情况: ABA, ABBA
  function findPalindromicByABA (str, index) {
    let s = str[index]
    let left = index
    let right = index
    const length = str.length
    let isPalindromic = true

    while (left > -1 && right < length && isPalindromic) {
      left = left - 1
      right = right + 1
      if (str[left] && str[right] && str[left] === str[right]) {
        s = str[left] + s + str[right]
      } else {
        isPalindromic = false
      }
    }
    return s
  }
  function findPalindromicByABBA (str, index) {
    let s = ''
    let left = index + 1
    let right = index
    const length = str.length
    let isPalindromic = true

    while (left > -1 && right < length && isPalindromic) {
      left = left - 1
      right = right + 1
      if (str[left] && str[right] && str[left] === str[right]) {
        s = str[left] + s + str[right]
      } else {
        isPalindromic = false
      }
    }

    return s
  }
};
