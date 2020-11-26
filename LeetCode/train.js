/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    if (s.length === 0) {
        return 0
    }
    const dict = {}
    let start = 0
    let finish = 0
    let maxLength = 0
    while (start < s.length && finish < s.length){
        if (!dict[s.charAt(finish)]) {
            dict[s.charAt(finish)] = 1
            finish += 1
            maxLength = Math.max(maxLength, finish - start)
        } else {
            delete dict[s.charAt(start)]
            start += 1
        }
    }
    return maxLength

};
