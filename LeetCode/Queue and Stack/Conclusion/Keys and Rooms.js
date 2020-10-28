const canVisitAllRooms = function (rooms) {
    const queue = []
    const visited = new Set()
    let edge =true;
    queue.push([rooms[0], 0])
    while (queue.length !== 0) {
        edge = false
        let [currNode, index] = queue.shift()
        for (let i = 0; i < currNode.length; i++) {
            if (!visited.has(currNode[i])) {
                queue.push([rooms[currNode[i]], currNode[i]])
                edge = true
            }
        }
        visited.add(index)
    }




    return visited.size === rooms.length
};

console.log(canVisitAllRooms([[1],[2],[3],[]]))