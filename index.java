import java.util.ArrayList;
import java.util.LinkedList;

class Solution {
  // public ListNode rotateRight(ListNode head, int k) {
  //   if (head == null || head.next == null) {
  //     return head;
  //   }
  //   ArrayList<ListNode> arr = new ArrayList<ListNode>();
  //   while (head != null) {
  //     arr.add(head);
  //     head = head.next;
  //   }
  //   int length = arr.size();
  //   k = length <= k ? k % length : k;
  //   if (k > 0) {
  //     arr.get(length - 1).next = arr.get(0);
  //     arr.get(length - 1 - k).next = null;
  //     return arr.get(length - k);
  //   }
  //   return arr.get(0);
  // }

  public TreeNode createTreeNode (LinkedList<Integer> array, int i, TreeNode tree) {
    // Integer value = array.removeFirst();
    tree.val = array.get(i);
    int leftIndex = i * 2 + 1;
    int rightIndex = leftIndex + 1;
    tree.left = new TreeNode(array.get(leftIndex));
    tree.right = new TreeNode(array.get(rightIndex));
    if (array.get(leftIndex) != null) {
      createTreeNode(array, leftIndex, tree.left);
    }
    if (array.get(rightIndex) != null) {
      createTreeNode(array, rightIndex, tree.right);
    }
    return tree;
  }
  public static void main (String[] args) {
    LinkedList<Integer> arr = new LinkedList<Integer>();
    // [1, 2, 3, 4, 5, 6, 7, 8]
    //  1  2  2  3  3  3  3  4
    //  0  1  2  3  4  5  6  7
    arr.add(1);
    arr.add(2);
    arr.add(3);
    arr.add(4);
    arr.add(5);
    arr.add(null);
    arr.add(6);
    arr.add(null);
    arr.add(8);
    Solution s = new Solution();
    TreeNode a = new TreeNode(0);
    TreeNode t = s.createTreeNode(arr, 0, a);

    // while (arr.size() > 0) {
    //   Integer a = arr.removeFirst();
    //   System.out.println(a);
    // }
    System.out.println(t.val);
  }
}

class TreeNode {
  Integer val;
  TreeNode left;
  TreeNode right;
  TreeNode(Integer x) { val = x; }
}