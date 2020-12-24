function TreeNode(value, left, right) {
    this.val = value === undefined ? 0 : value
    this.repeat = 0
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const insertNode = (root, value) => {
    let currNode = root
    let previous
    let index = null
    while (currNode) {
        if (currNode.val > value) {
            previous = currNode
            currNode = currNode.left
            index = true
        } else if (currNode.val < value) {
            previous = currNode
            currNode = currNode.right
            index = false
        } else if (currNode.val === value) {
            currNode.repeat += 1
            index = null
            break
        }
    }
    if (index !== null) {
        if (index) {
            previous.left = new TreeNode(value)
        } else {
            previous.right = new TreeNode(value)
        }
    }
}
const KthLargest = function (k, nums) {
    this.root = null
    this.k = k
    for (let i = 0; i < nums.length; i++) {
        if (this.root === null) {
            this.root = new TreeNode(nums[i])
        } else {
            insertNode(this.root, nums[i])
        }
    }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    if(this.root===null){
        this.root = new TreeNode(val)
    }
    insertNode(this.root, val)
    let currNode = this.root
    let count = this.k
    const stack = []
    while (currNode|| stack.length!==0) {
        while (currNode) {
            stack.push(currNode)
            currNode = currNode.right
        }
        let removed = stack.pop()
        count = count - 1 - removed.repeat
        if(count <= 0){
            return removed.val
        }else {
            currNode = removed.left
        }
    }
};
debugger
const kthLargest = new KthLargest(1, []);
console.log(kthLargest.add(-3))   // return 4
console.log(kthLargest.add(-2))   // return 5
console.log(kthLargest.add(-4))  // return 5
console.log(
    kthLargest.add(0)
)// return 8
console.log(
    kthLargest.add(4)
)// return 8