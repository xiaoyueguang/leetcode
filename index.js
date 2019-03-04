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
  let gt10 = false
  const listNode = new ListNode(0)
  let pointListNode = listNode

  while (l1 || l2 || gt10) {
    const result = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (gt10 ? 1 : 0)
    gt10 = result > 9
    pointListNode.next = new ListNode(gt10 ? result - 10 : result)
    pointListNode = pointListNode.next
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }
  return listNode.next
};