/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const calcEquation = function (equations, values, queries) {
    const graph = {}
    // Build Graph
    for (let i = 0; i < equations.length; i++) {
        const firstNode = equations[i][0]
        const secondNode = equations[i][1]
        if (!graph[firstNode]) {
            graph[firstNode] = [[secondNode, values[i]]]
        } else if (graph[firstNode]) {
            graph[firstNode].push([secondNode, values[i]])
        }

        if (!graph[secondNode]) {
            graph[secondNode] = [[firstNode, 1 / values[i]]]
        } else if (graph[secondNode]) {
            graph[secondNode].push([firstNode, 1 / values[i]])
        }
    }

    if (queries.length === 0) {
        return -1
    }
    const result = []
    for (let i = 0; i < queries.length; i++) {
        const source = queries[i][0]
        const destination = queries[i][1]
        if (!graph[source] || !graph[destination]) {
            result.push(-1)
        } else if (graph[source] && destination === source) {
            result.push(1)
        } else if (graph[source] && graph[destination] && source !== destination) {
            const queue = [[graph[source], 1, source]]
            debugger
            const visited = {}
            visited[source] = 1
            let index = false
            while (queue.length !== 0) {
                const [possiblePaths, nodeValue, name] = queue.shift()


                if (name === destination) {
                    result.push(nodeValue)
                    index = true
                    break
                }
                for (let i = 0; i < possiblePaths.length; i++) {
                    let [nodeName, currVal] = possiblePaths[i]
                    if (!visited[nodeName]) {
                        queue.push([graph[nodeName], nodeValue * currVal, nodeName])
                        visited[nodeName] = 1
                    }
                }

            }
            if(!index){

                result.push(-1)
            }
        }
    }
    return result
};
console.log(
    calcEquation(
        [["a","b"],["c","d"]],
        [1.0, 1.0],
        [["a","c"],["b","d"],["b","a"],["d","c"]]
    )
)
