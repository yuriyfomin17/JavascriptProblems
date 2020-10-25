function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}
;


/**
 * @param {Node} node
 * @param map
 * @return {Node}
 */

//DFS
const cloneGraphDFS = function(node, map = new Map()) {
    if(!node) return null
    if(map.has(node)) return map.get(node)
    const n = new Node(node.val)
    map.set(node, n)
    for(let k of node.neighbors){
        n.neighbors.push(cloneGraphDFS(k, map))
    }
    return n
};

//BFS
const cloneGraphBFS = function(node, map = new Map()) {
    if(!node) return null
    map.set(node, new Node(node.val))
    const queue = [node]
    while(queue.length){
        const n = queue.shift()
        for(let k of n.neighbors){
            if(!map.has(k)){
                map.set(k, new Node(k.val))
                queue.push(k)
            }
            map.get(n).neighbors.push(map.get(k))
        }
    }
    return map.get(node)
};

