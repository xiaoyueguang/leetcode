// 数组
[]

// 链表
class ListNode {
  value: any;
  next: ListNode;
  constructor (value: any) {
    this.value = value
    this.next = null
  }
}

// 栈
class Stack {
  private stack: any[];
  push (value: any): void {
    this.stack.push(value)
  }
  pop (): any {
    return this.stack.pop()
  }
}

// 队列
class Queue {
  private queue: any[];
  push (value: any): void {
    this.queue.push(value)
  }
  pop (): any {
    return this.queue.shift()
  }
}

// 哈希表
class HashTable {
  private hashTable: any[];
  private size: number;
  constructor () {
    this.hashTable = new Array(2)
    this.size = 2
  }
  put (key: string, value: any) {
    const index = this.hashCode(key)
    let curr = this.hashTable[index]
    let depth = 1
    if (!curr) {
      this.hashTable[index] = new HashTableNode(value, key)
    } else {
      while (curr.next) {
        curr = curr.next
        depth += 1
      }

      curr.next = new HashTableNode(value, key)
      if (depth > 10) {
        this.rebuild()
      }
    }
  }
  // 重建
  rebuild () {
    const length = this.size
    this.size = length * 2
    const oldHashTable = this.hashTable
    this.hashTable = new Array(this.size)

    for (let i = 0; i < length; i++) {
      let curr = oldHashTable[i] as HashTableNode
      while (curr) {
        this.put(curr.key, curr.value)
        curr = curr.next
      }
    }
  }
  get (key: string): any {
    const index = this.hashCode(key)
    let curr = this.hashTable[index] as HashTableNode
    if (curr.key === key) {
      return curr.value
    } else {
      while (curr = curr.next) {
        if (curr.key === key) {
          return curr.value
        }
      }
    }
  }
  hashCode (key: string) {
    let hash = -1
    if (key === null) {
      return hash
    }
    const { length } = key
    for (let i = 0; i < length; i++) {
      let char = key.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash
    }
    if (hash < 0) {
      hash = 0 - hash
    }
    return hash % this.size
  }
}
class HashTableNode {
  value: any
  key: any
  next: HashTableNode
  constructor (value: any, key: any) {
    this.value = value
    this.key = key
  }
}

/**
 * @example
 * [1, 2, 3, undefined, 4]
 * =>
 *   1
 *  / \
 * 2  3
 *  \
 *   4
 */
function createBTree (array: number[], i: number = 0, tree: BTreeNode = new BTreeNode(-1)) {
  tree.value = array[i]
  const leftIndex: number = i * 2 + 1
  const rightIndex: number = leftIndex + 1
  if (array[leftIndex]) {
    tree.left = new BTreeNode(array[leftIndex])
    createBTree(array, leftIndex, tree.left)
  }
  if (array[rightIndex]) {
    tree.right = new BTreeNode(array[rightIndex])
    createBTree(array, rightIndex, tree.right)
  }
  return tree
}
class BTreeNode {
  value: any
  left: BTreeNode
  right: BTreeNode
  constructor (value: any) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// const a = createBTree([1,2,3,4,5,,6,,8])
// console.log(JSON.stringify(a))
