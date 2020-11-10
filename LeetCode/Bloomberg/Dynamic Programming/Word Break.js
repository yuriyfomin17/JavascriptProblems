// O(N^2) for every starting index, search continues till the end of the given string
// Space complexity is O(N) where there is queue of almost n size
const wordBreak = (s, wordDict) => {
    const set = new Set(wordDict)
    const queue = [0]
    debugger
    while (queue.length !== 0) {
        let start = queue.shift()
        if (!set.has(start)) {
            for (let i = start; i <= s.length; i++) {
                let currString = s.slice(start, i)
                if (set.has(currString)) {
                    queue.push(i)
                    if (i === s.length) {
                        return true
                    }
                }
            }
        }
        set.add(start)

    }
    return false;
};
console.log(
    wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])
)