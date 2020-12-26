/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// Time Complexity is O(N) where N is the length of A
    // Space Complexity is O(N)
const shortestSubarray = function (A, K) {
    let N = A.length
    debugger
    const P = new Array(N+1).fill(0)
    for (let i = 0; i < N; i++) {
       P[i+1] = P[i] + A[i]
    }

    // Want smallest y - x with Py- Px>=K
    let answer = N + 1 // N+1 is impossible
    const queue = [] //opt(y) candidates, as indices of P
    for (let y = 0; y < P.length; y++) {
        // Want opt(y) = largest x with P[x] <= P[y] - K;
        let x1 = P[y]
        let x2 = P[queue[queue.length - 1]]
        while (queue.length !== 0 && x1 <= x2) {
            queue.pop()
            x1 = P[y]
            x2 = P[queue[queue.length - 1]]
        }
        x1 = P[y]
        x2 = P[queue[0]] + K
        while (queue.length !== 0 && x1 >= x2) {
            let currElem = queue.shift()
            answer = Math.min(answer, y - currElem)
            x1 = P[y]
            x2 = P[queue[0]] + K

        }
        queue.push(y)
    }
    return answer < N + 1 ? answer : -1
};

console.log(
    shortestSubarray([2, -1, 2],
        3
    ))