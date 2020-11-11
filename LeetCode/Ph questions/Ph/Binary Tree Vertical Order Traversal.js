function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
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