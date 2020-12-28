/**
 * @param {string} S
 * @return {number[]}
 */
//Time complexity is O(N) where N is the length of S
    // SPace Complexity is O(N)
const diStringMatch = function (S) {
    const N = S.length
    let low = 0
    let high = N
    const answer = new Array(N + 1)
    for (let i = 0; i < N; i++) {
        if(S[i]==='I'){
            answer[i] = low++
        }else {
            answer[i] = high--
        }
    }
    answer[N] = low
    return answer
};