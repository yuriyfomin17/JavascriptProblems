// In the world of graphs exists a structure called "spanning tree".
// It is unique because it's created not on its own, but based on other graphs.
// To make a spanning tree out of a given graph you should remove all the edges which create cycles, for example:

// This can become      this      or      this        or       this
//
// A                    A                  A                   A
// |\                   |                   \                  |\
// | \       ==>        |                    \                 | \
// |__\                 |__                 __\                |  \
// B   C                 B  C               B  C                B  C

//Solution:Kruskal’s Minimum Spanning Tree Algorithm | Greedy Algo-2
// Time Complexity: O(ElogE) or O(ElogV). Sorting of edges takes O(ELogE) time.
// After sorting, we iterate through all edges and apply find-union algorithm.
// The find and union operations can take atmost O(LogV) time.
// So overall complexity is O(ELogE + ELogV) time.
// The value of E can be atmost O(V2), so O(LogV) are O(LogE) same.
// Therefore, overall time complexity is O(ElogE) or O(ElogV)

function makeSpanningTree(edges, t) {
    // return vertices of a spanning tree
    const copyEdges = edges.slice()
    if (t === "min") {

        copyEdges.sort(function (a, b) {
            return a[1] - b[1]
        })
    } else {
        copyEdges.sort(function (a, b) {
            return b[1] - a[1]
        })
    }
    const set = new Set()
    edges.map(function (el) {
        let currElem = el[0].split("")
        set.add(currElem[0])
        set.add(currElem[1])
    })
    const numEdges = set.size
    const result = []
    for (let i = 0; i < numEdges - 1; ++i) {
        result.push(copyEdges[i])
    }


    return result

}

console.log(makeSpanningTree([["AB", 2], ["BC", 4], ["AC", 1]],
    "min"))

// function removeFromEdges (edges, [a, b]) {
//     for (let i = edges.length - 1; i >= 0; i--) {
//         let [[...edge], w] = edges[i]
//
//         if (edge.indexOf(a) != -1 &&  edge.indexOf(b) != -1) {
//             edges.splice(i, 1)
//         }
//     }
// }
//
// function getEdge (edges, t, nodes) {
//     let val = t == 'min' ? Infinity : -Infinity
//     let edge = ['', val]
//
//     for (let [[a, b], w] of edges) {
//         if (a == b) continue
//         if (Object.keys(nodes).length == 0 || (nodes[a] != nodes[b])) {
//             let condition = t == 'min' ? edge[1] < w : edge[1] > w
//             edge = condition ? edge : [[a, b], w]
//         }
//     }
//     return edge
// }
//
// function makeSpanningTree (e, t) {
//     let edges = e.slice(0)
//     let visitedNodes = {}
//     let choosenEdges = []
//     while (edges.length > 0) {
//         let edge = getEdge(edges, t, visitedNodes)
//         if (Math.abs(edge[1]) == Infinity) break
//
//         removeFromEdges(edges, edge[0])
//
//         visitedNodes[edge[0][0]] = true
//         visitedNodes[edge[0][1]] = true
//         choosenEdges.push([edge[0].join('') , edge[1]])
//     }
//
//     return choosenEdges
// }

// console.log(makeSpanningTree([["AB", 2], ["BC", 4], ["AC", 1]], "min"))