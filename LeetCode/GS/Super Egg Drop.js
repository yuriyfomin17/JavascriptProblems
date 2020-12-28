/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
// TIme COmplexity is O(K*log(N))
    // Space Complexity is O(1)
const superEggDrop = function (K, N) {
    let low = 1
    let high = N
    const helper = (x, K, N) => {
        let answer = 0
        let r = 1
        for (let i = 1; i <= K; i++) {
            r *= x - i + 1
            r /= i
            answer += r
            if (answer >= N) {
                break
            }
        }
        return answer
    }
    while (low < high) {
        let guess = Math.floor((low + high) / 2)
        if (helper(guess, K, N) < N) {
            low = guess + 1
        } else {
            high = guess
        }
    }
    return low
};