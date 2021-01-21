/**
 * @param {string} s
 * @return {number}
 */
// Time Complexity is O(N)
    // Space Complexity is O(N)
const firstUniqChar = function (s) {
    const dict = {}
    for (let i = 0; i < s.length; i++) {
        if (dict[s[i]] === undefined) {
            dict[s[i]] = [i, 1]
        } else {
            dict[s[i]][1] = dict[s[i]][1] + 1
        }
    }
    for (let value of Object.values(dict)) {
        if (value[1] === 1) {
            return value[0]
        }
    }
    return -1

};

console.log(
    firstUniqChar(
        "loveleetcode"
    )
)