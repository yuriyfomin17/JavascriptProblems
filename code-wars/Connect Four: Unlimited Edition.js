function solution(T) {
    // write your code in JavaScript (Node.js 8.9.4)

    function biggestPerfectTree(tree, obj) {
        if (tree.x === null) {
            obj.perfect = true
            obj.height = 0
            obj.rootTree = null

            return obj
        }
        let childLeft = biggestPerfectTree(tree.left, obj)
        let childRight = biggestPerfectTree(tree.right, obj)
        if (childLeft.perfect && childRight.perfect && childLeft.height === childRight.height) {
            childRight.height = childLeft.height + 1
            childRight.perfect = true
            childRight.rootTree = tree
            return childRight
        }
        obj.perfect = false
        obj.heightTree = Math.max(childLeft.height, childRight.height)
        if (childLeft.height > childRight.height) {
            obj.rootTree = childLeft.rootTree
        } else {
            obj.rootTree = childRight.rootTree
        }
        return obj

    }
    const obj = {}
    obj["height"] = 0
    obj["perfect"] = 0
    obj["rootTree"] = 0
    return biggestPerfectTree(T, obj)


}
