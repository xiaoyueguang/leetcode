// 数组
[];
// 链表
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
        this.next = null;
    }
    return ListNode;
}());
// 栈
var Stack = /** @class */ (function () {
    function Stack() {
    }
    Stack.prototype.push = function (value) {
        this.stack.push(value);
    };
    Stack.prototype.pop = function () {
        return this.stack.pop();
    };
    return Stack;
}());
// 队列
var Queue = /** @class */ (function () {
    function Queue() {
    }
    Queue.prototype.push = function (value) {
        this.queue.push(value);
    };
    Queue.prototype.pop = function () {
        return this.queue.shift();
    };
    return Queue;
}());
// 哈希表
var HashTable = /** @class */ (function () {
    function HashTable() {
        this.hashTable = new Array(2);
        this.size = 2;
    }
    HashTable.prototype.put = function (key, value) {
        var index = this.hashCode(key);
        var curr = this.hashTable[index];
        var depth = 1;
        if (!curr) {
            this.hashTable[index] = new HashTableNode(value, key);
        }
        else {
            while (curr.next) {
                curr = curr.next;
                depth += 1;
            }
            curr.next = new HashTableNode(value, key);
            if (depth > 10) {
                this.rebuild();
            }
        }
    };
    // 重建
    HashTable.prototype.rebuild = function () {
        var length = this.size;
        this.size = length * 2;
        var oldHashTable = this.hashTable;
        this.hashTable = new Array(this.size);
        for (var i = 0; i < length; i++) {
            var curr = oldHashTable[i];
            while (curr) {
                this.put(curr.key, curr.value);
                curr = curr.next;
            }
        }
    };
    HashTable.prototype.get = function (key) {
        var index = this.hashCode(key);
        var curr = this.hashTable[index];
        if (curr.key === key) {
            return curr.value;
        }
        else {
            while (curr = curr.next) {
                if (curr.key === key) {
                    return curr.value;
                }
            }
        }
    };
    HashTable.prototype.hashCode = function (key) {
        var hash = -1;
        if (key === null) {
            return hash;
        }
        var length = key.length;
        for (var i = 0; i < length; i++) {
            var char = key.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        if (hash < 0) {
            hash = 0 - hash;
        }
        return hash % this.size;
    };
    return HashTable;
}());
var HashTableNode = /** @class */ (function () {
    function HashTableNode(value, key) {
        this.value = value;
        this.key = key;
    }
    return HashTableNode;
}());
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
function createBTree(array, a) {
    if (a === void 0) { a = '111'; }
    if (array.length === 0) {
        return null;
    }
    console.log(array[0], a);
    var value = array.shift();
    if (value) {
        var treeNode = new BTreeNode(value);
        treeNode.left = createBTree(array, 'left');
        treeNode.right = createBTree(array, 'right');
        return treeNode;
    }
    else {
        return null;
    }
}
var BTreeNode = /** @class */ (function () {
    function BTreeNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return BTreeNode;
}());
var a = createBTree([1, 2, 3, 4, 5, , 6, , 8]);
console.log(JSON.stringify(a));
