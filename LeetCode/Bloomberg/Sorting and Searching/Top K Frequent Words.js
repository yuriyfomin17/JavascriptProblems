/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
// Time complexity is O(N) -mapping + O(Klog(K)) -sorting
// Space complexity is O(2K) where we store K strings in set and K strings in dictionary
const topKFrequent = function (words, k) {
    const set = new Set()
    const dict = {}
    debugger
    words.map(el => {
        set.add(el)
        if (!dict[el]) {
            dict[el] = 1
        } else {
            dict[el] = dict[el] + 1
        }
    })
    words = Array.from(set)
    words.sort(function (a, b) {
        if (dict[a] > dict[b]) {
            return -1
        } else if (dict[a] < dict[b]) {
            return 1
        } else if (a > b) {
            return 1
        } else if (a < b) {
            return -1
        }
    })
    return words.slice(0, k)
};

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2))