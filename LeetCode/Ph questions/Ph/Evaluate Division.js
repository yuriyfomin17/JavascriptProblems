/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
// TIme Complexity is O(M*N + N). Firstly, we build the graph which takes O(N) where N is the number of nodes
    // Secondly we M queries and in worst case for each query we BFS all the graph which is O(N)

    // Space Complexity is O(N*N) since in worst case we can have fully connected graph where each node
    // edge connected to next node
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
                // possible paths, parent path weight and vertex name are shifted from queue
                const [possiblePaths, parentPathWeight, VertexName] = queue.shift()

                // if vertex name is equal to destination this means we have found our path
                if (VertexName === destination) {
                    result.push(parentPathWeight)
                    index = true
                    break
                }
                for (let i = 0; i < possiblePaths.length; i++) {
                    let [currentVertex, currentEdgeValue] = possiblePaths[i]
                    if (!visited[currentVertex]) {
                        queue.push([graph[currentVertex], parentPathWeight * currentEdgeValue, currentVertex])
                        visited[currentVertex] = 1
                    }
                }

            }
            // if we exited the loop but not path for source adn target is found then -1 added
            if(!index){
                result.push(-1)
            }
        }

    }
    return result
};

calcEquation([["a", "b"], ["b", "c"]], [2.0, 3.0], [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]])