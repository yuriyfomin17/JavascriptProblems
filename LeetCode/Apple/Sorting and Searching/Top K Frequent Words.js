/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
// Time complexity is O(NlogN) since we map through words O(N) then we sord words O(NlogN) => N+NlogN = NlogN
    // Space Complexity is O(N) since we store at most words.length characters
const topKFrequent = function (words, k) {
    const dict = {}
    debugger
    words.map(el => {
        if (dict[el] === undefined) {
            dict[el] = 1
        } else {
            dict[el] += 1
        }
    })
    words.sort((a, b) => {
        if(dict[a] - dict[b]===0){
            if(a>b){
                return 1
            }else {
                return -1
            }
        }else {
            return (dict[a] - dict[b])*-1
        }
    })
    const set = new Set()
    for(let i =0; i<words.length && set.size<k; i++){
        set.add(words[i])
    }
    return Array.from(set)
}

console.log(
    topKFrequent(["i", "love", "leetcode", "i", "love", "coding"],
        2)
)