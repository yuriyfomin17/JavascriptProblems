function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// Time Complexity is O(Nlog(N)) where N is the number of nodes in the tree
// BFS runs O(N) times Then sorting the dictionary by the key can result in O(Nlog(N)) time complexity
    // in the worst case scenario where the binary treee is extremally unbalanced . Like each node has only left child

// Space Complexity is O(N) where N is the number of nodes in the tree
const verticalOrder = function (root) {
    if (!root) {
        return []
    }
    const dict = {}
    const queue = [[root, 0]]
    while (queue.length !== 0) {
        let [currElem, column] = queue.shift()
        if (dict[column]) {
            dict[column].push(currElem.val)
        } else {
            dict[column] = [currElem.val]
        }
        if (currElem.left !== null) {
            queue.push([currElem.left, column - 1])
        }
        if (currElem.right !== null) {
            queue.push([currElem.right, column + 1])
        }


    }
    let result = []
    console.log(dict)
    for (let [key, value] of Object.entries(dict)) {
        result.push([key, value])
    }
    result.sort(function (a, b) {
        return a[0] - b[0]

    })
    let result2 = []
    result.map(el => result2.push(el[1]))
    return result2
};
// Time Complexity is O(N)
var verticalOrder = function(root) {
    if (!root) return [];

    root.offset = 0;
    const queue = [root];

    const res = [];
    let rootLevel = 0;

    while (queue.length) {
        let node = queue.shift();

        if (res[rootLevel + node.offset]) {
            res[rootLevel + node.offset].push(node.val);
        } else if (node.offset < 0) {
            res.unshift([node.val]);
            rootLevel++;
        } else {
            res.push([node.val]);
        }

        if (node.left) {
            node.left.offset = node.offset - 1;
            queue.push(node.left);
        }
        if (node.right) {
            node.right.offset = node.offset + 1;
            queue.push(node.right);
        }
    }

    return res;
};

// Track the vertical level of the root node.
//     Store the vertical level offset from the root node inside each queued node.
//     If the vertical level corresponding to a visiting node doesn't exist on the left,
//     we shift our results to the right and increment the root vertical level;
//     for the right side we simply push on a new level.