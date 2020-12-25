// O(N^2) for every starting index, search continues till the end of the given string
// Space complexity is O(N) where there is queue of almost n size
const wordBreak = function (s, wordDict) {
    const set = new Set(wordDict)
    const queue = [0]
    debugger
    while (queue.length !== 0) {
        let currStart = queue.shift()
        if (currStart === s.length) {
            return true
        }
        if (!set.has(currStart)) {
            for (let start = currStart; start <= s.length; start++) {
                let currString = s.slice(currStart, start)
                if (set.has(currString)) {
                    queue.push(start)
                }
            }
            set.add(currStart)
        }
    }
    return false
};
console.log(
    wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])
)