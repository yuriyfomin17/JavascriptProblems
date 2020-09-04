function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const currMax = Math.max(...A)
    if (currMax > 0) {
        A.sort(function (a, b) {
            return a - b
        })
        for (let i = 1; i <= currMax; ++i) {
            if(!A.includes(i)){
                return i
            }
        }
        return currMax + 1
    } else {
        return 1
    }

}
