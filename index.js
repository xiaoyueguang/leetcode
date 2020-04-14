/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const arr1 = []
  const arr2 = []
  while (l1) {
    arr1.push(l1.val)
    l1 = l1.next
  }
  while (l2) {
    arr2.push(l2.val)
    l2 = l2.next
  }
  arr1.reverse()
  arr2.reverse()
  const length = arr1.length > arr2.length ? arr1.length : arr2.length
  let carry = false
  let listNode = undefined

  for (let i = 0; i < length; i++) {
    const result = (arr1[i] || 0) + (arr2[i] || 0) + (carry ? 1 : 0);
    carry = result > 9
    const l = new ListNode(carry ? result - 10 : result)
    l.next = listNode
    listNode = l
  }
  if (carry) {
    const l = new ListNode(1)
    l.next = listNode
    listNode = l
  }

  return listNode
};