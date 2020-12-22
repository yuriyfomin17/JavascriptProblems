// Using Two Stacks
const zigzagLevelOrder = function(root) {
    if (!root) return [];
    let stack1 = [root], stack2 = [];
    let result = [];
    while (stack1.length > 0 || stack2.length > 0) {
        let level = [];
        if (result.length % 2 === 0) { // normal order (next order is reverse order)
            while (stack1.length > 0) {
                let node = stack1.pop();
                level.push(node.val);
                if (node.left) stack2.push(node.left);
                if (node.right) stack2.push(node.right);
            }
        }
        else { // reverse order (next order is normal order)
            while (stack2.length > 0) {
                let node = stack2.pop();
                level.push(node.val);
                if (node.right) stack1.push(node.right);
                if (node.left) stack1.push(node.left);
            }
        }
        result.push(level);
    }
    return result;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};