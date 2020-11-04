/**
 * @param {string} s
 * @return {number}
 */

// Time complexity is O(n^3) since we iterating over string n *n*n times where n is th length of the string
// Space complexity is O(K) where K is the length of the dictionary. At most k can be equal to the length of the string
const lengthOfLongestSubstringBrute = function (s) {
    if (s === '') {
        return 0
    }
    if (s === ' ') {
        return 1
    }
    let answer = -Infinity
    let dict = new Map()
    for (let start = 0; start < s.length; start++) {
        for (let finish = start + 1; finish <= s.length; finish++) {
            let index = true
            for (let i = start; i < finish && index === true; i++) {
                if (!dict.has(s.charAt(i)) && index) {
                    answer = Math.max(answer, i - start + 1)
                    dict.set(s.charAt(i), i)
                } else {
                    index = false
                }
            }
            dict.clear()
        }
    }
    return answer
};

// Time complexity is O(N) since we iterate through the entire string at most once. And deletion and insertion process in dictionary is O(1)
// Space complexity is O(K) which is the size of the dictionary where K in worst cases will be the length of the string

const lengthOfLongestSubstring = function (s) {
    if(s===''){
        return 0
    }
    let start = 0
    let finish = 0
    s = s.split('')
    let size = s.length
    const dict = new Map()
    let answer = -Infinity
    while (start < size && finish < size) {
        if (!dict.has(s[finish])) {
            dict.set(s[finish++], finish)
            answer = Math.max(answer, finish - start)
        } else {
            dict.delete(s[start++])
        }
    }
    return answer
};

console.log(lengthOfLongestSubstring("pwwkew"))