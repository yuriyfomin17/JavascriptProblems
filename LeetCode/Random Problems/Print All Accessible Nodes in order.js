function Node(val, up, down, right) {
    this.val = val === undefined ? 0 : val
    this.up = up === undefined ? null : up
    this.down = down === undefined ? null : down
    this.right = right === undefined ? null : right

}

function PrintAllNodes() {
    const result = []
    const helper = (node) => {
        if(!node){
            return null
        }
        helper(node.up)
        result.push(node.val)
        helper(node.down)
        helper(node.right)

    }
    const roo = new Node(3)
    roo.up = new Node(2)
    roo.up.up = new Node(1)
    roo.down = new Node(4)
    roo.right = new Node(5)
    roo.right.down = new Node(6)
    roo.right.right = new Node(8)
    roo.right.right.up = new Node(7)
    roo.right.right.down = new Node(9)
    roo.right.right.right = new Node(11)
    roo.right.right.right.up = new Node(10)
    roo.right.right.right.right = new Node(12)
    helper( roo.right)
    console.log(
        result
    )
}

console.log(PrintAllNodes())