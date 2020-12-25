/**
 * @param {string} s
 * @return {number}
 */
//Time complexity is O(N^2) since we iterate over array each time for each char hence N*N
// Space complexity : no extra space is taken O(1)
const firstUniqChar = function (s) {
    const size = s.length
    for (let i = 0; i < size; i++) {
        if (s.indexOf(s.charAt(i)) === s.lastIndexOf(s.charAt(i))) {
            return i
        }
    }
    return -1
};
// Theoretically HashMap is better here which takes O(N) since we iterate only once. However, tope approach is better
// Space complexity is O(K) where K is the size of and ditconary which at most can be equal to the size of the string
const firstUniqCharH = function (s) {
    debugger
    const size = s.length
    const dict = {}
    for (let i = 0; i < size; i++) {
        if (!dict[s.charAt(i)]) {
            dict[s.charAt(i)] = [i,1]
        } else {
            dict[s.charAt(i)][1] = dict[s.charAt(i)][1] + 1
        }
    }
    for (let [key, value] of Object.entries(dict)) {
        if (value[1] === 1) {
            return value[0]
        }
    }
    return -1
};
console.log(firstUniqCharH("leetcode"))
