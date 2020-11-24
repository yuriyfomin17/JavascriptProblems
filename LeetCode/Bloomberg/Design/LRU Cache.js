// var LRUCache = function (capacity) {
//     class Node {
//         constructor(key, val) {
//             this.key = key
//             this.val = val
//             this.prev = null
//             this.next = null
//         }
//     }
// // Our DLL is just simply a way to unshift, pop & remove in O(1) time.
// // We also initialize a length variable that keeps track of the size of our DLL.
//     class DoublyLinkedList {
//         constructor() {
//             this.head = null
//             this.tail = null
//             this.length = 0
//         }
//         unshift(key, val) {
//             const node = new Node(key, val) /
//             if (this.length === 0) {
//                 this.head = node
//                 this.tail = node
//             } else {
//                 node.next = this.head
//                 this.head.prev = node
//                 this.head = node
//             }
//             this.length++
//             return node
//         }
//         pop() {
//             if (this.head === this.tail) {
//                 this.head = null
//                 this.tail = null
//                 this.length = 0
//             } else {
//                 this.tail = this.tail.prev
//                 this.tail.next.prev = null
//                 this.tail.next = null
//                 this.length--
//             }
//         }
//         remove(node) {
//             if (node.next !== null) {
//                 node.next.prev = node.prev
//             } else {
//                 this.tail = node.prev
//             }
//             if (node.prev !== null) {
//                 node.prev.next = node.next
//             } else {
//                 this.head = node.next
//             }
//             node.next = null
//             node.prev = null
//             this.length--
//             return node
//         }
//     }
//
//     this.cache = {}
//     this.recently = new DoublyLinkedList()
//     this.capacity = capacity
// }
//
// LRUCache.prototype.get = function (key) {
//     if (this.cache[key]) {
//         this.recently.remove(this.cache[key])
//         this.cache[key] = this.recently.unshift(key, this.cache[key].val)
//         return this.cache[key].val
//     } else {
//         return -1
//     }
// }
// LRUCache.prototype.put = function (key, value) {
//     if (this.cache[key]) {
//         this.recently.remove(this.cache[key])
//         this.cache[key] = this.recently.unshift(key, value)
//     } else {
//         if (this.recently.length < this.capacity) {
//             this.cache[key] = this.recently.unshift(key, value)
//         } else {
//             delete this.cache[this.recently.tail.key]
//             this.recently.pop()
//             this.cache[key] = this.recently.unshift(key, value)
//         }
//     }
// }


//Map solution
/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
    this.LRU = new Map()
    this.capacity = capacity
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    const cache = this.LRU
    if (cache.has(key)) {
        const value = cache.get(key)
        cache.delete(key)
        cache.set(key, value)
        return value
    }
    return -1
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    const cache = this.LRU
    if (cache.has(key)) {

        cache.delete(key)
    }
    cache.set(key, value)

    const size = cache.size
    const capacity = this.capacity

    if (size > capacity) {
        const keys = cache.keys()
        cache.delete(keys.next().value)
    }

};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
debugger
const lRUCache = new LRUCache(2);//null
lRUCache.get(2) //-1
lRUCache.put(2, 6) //null
lRUCache.get(1) //-1
lRUCache.put(1, 5) //null
lRUCache.put(1, 2) //null
lRUCache.get(1)//2
lRUCache.get(2)//6