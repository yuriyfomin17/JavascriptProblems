/**
 * @param {number[][]} M
 * @return {number}
 */
// Time complexity is O(N^2) since we need N^2 operations to traverse matrix of n^2
    // Space complexity is O(N) since queue and visited array n is used
const findCircleNum = function (M) {
    const queue = []
    let count = 0
    const visited = {}
    for (let i = 0; i < M.length; i++) {
        if (visited[i] === undefined) {
            queue.push(i)
            while (queue.length !== 0) {
                let currRow = queue.shift()
                visited[currRow] = 1
                for (let currCol = 0; currCol < M.length; currCol++) {
                    if(M[currRow][currCol]===1 && visited[currCol]===undefined){
                        queue.push(currCol)
                    }
                }
            }
            count+=1
        }
    }
    return count
};