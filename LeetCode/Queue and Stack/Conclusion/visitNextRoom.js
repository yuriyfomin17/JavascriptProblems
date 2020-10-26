const canVisitAllRooms = function (rooms) {
    const length = rooms.length
    let allRooms = rooms.length
    let count = 0
    const queue = []
    const visited = new Set()
    let edge =true;
    rooms.map((currRoom, row) => {
        if (!visited.has(row) && edge) {

            queue.push([currRoom, row])
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
        }

    })

    return visited.size === rooms.length
};

console.log(canVisitAllRooms([[1],[2],[3],[]]))