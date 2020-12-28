/**
 * @param {string} s
 * @return {number}
 */
// Time Complexity is O(N^2) for the input string of length N. Time complexity depend by two variables
    //-number of possible palindromic centers we process
    //-how much time we spend processing each other
    // Number of possible palindromic centers is 2N-1: there are N single character centers and N-1 consecutive character
    // pairs as centers. Hence N * (2N-1)==N^2
    // Space Complexity is O(1) as no extra space is required
const countSubstrings = function (s) {
    let answer = 0
    const countAroundCenter = (currString, left, right) => {
        let ans = 0
        while (left >= 0 && right <= s.length) {
            if (currString[left] !== currString[right]) {
                break
            }
            left -= 1
            right += 1
            ans += 1
        }
        return ans
    }
    for (let i = 0; i < s.length; i++) {
        answer += countAroundCenter(s, i, i)
        answer += countAroundCenter(s, i, i + 1)
    }
    return answer
};