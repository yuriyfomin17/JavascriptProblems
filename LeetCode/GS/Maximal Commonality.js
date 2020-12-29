//O(n) time complexity and O(n) space complexity
const findMaxCommonality = (string) => {
    if (string.length === 0 || string.length === 1) {
        return 0
    }
    // For letter frequencies
    const cnt = {}
    const lcnt = {}

    // global max and local max
    let gmax = -Infinity
    let max = 0
    let temp

    // Find frequency of each char
    for (let i = 0; i < string.length; i++) {
        cnt[string[i]] = (cnt[string[i]] || 0) + 1
    }

    // Add to left frequency and reduce character frequency in right and find max and global max
    for (let i = 0; i < string.length; i++) {
        let char = string[i]
        temp = cnt[char] - 1

        max -= Math.min(cnt[char] || 0, lcnt[char] || 0)

        if (temp === 0) {
            delete cnt[char]
        } else {
            cnt[char] = temp
        }

        lcnt[char] = (lcnt[char] || 0) + 1

        max+=Math.min(cnt[char]||0, lcnt[char]||0)
        gmax = Math.max(gmax, max)
    }
    return gmax
}

console.log(
    findMaxCommonality('abcdecdefg')
)