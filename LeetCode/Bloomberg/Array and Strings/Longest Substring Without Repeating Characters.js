/**
 * @param {string} s
 * @return {number}
 */

// Time complexity is O(n^3) since we iterating over string n *n*n times where n is th length of the string
// Space complexity is O(K) where K is the length of the dictionary. At most k can be equal to the length of the string
const lengthOfLongestSubstringBrute = function (s) {
    let maxSub = ''
    debugger
    let dict = {}
    for (let start = 0; start < s.length; start++) {
        for (let finish = start + 1; finish <= s.length; finish++) {
            let currString = ''
            for (let i = start; i <= finish; i++) {
                if(!dict[s.charAt(i)]){
                    dict[s.charAt(i)] = 1
                    currString = currString + s.charAt(i)
                    if(currString.length>maxSub.length){
                        maxSub = currString
                    }

                }else{
                    break
                }
            }
            dict = {}

        }
    }
    return  maxSub.length
};

// Time complexity is O(N) since we iterate through the entire string at most once. And deletion and insertion process in dictionary is O(1)
// Space complexity is O(K) which is the size of the dictionary where K in worst cases will be the length of the string

const lengthOfLongestSubstring = function (s) {
    if (s === '') {
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
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring2 = function (s) {
    let maxSub = ''
    debugger
    let dict = {}
    for (let start = 0; start < s.length; start++) {
        for (let finish = start + 1; finish <= s.length; finish++) {
            let currString = ''
            for (let i = start; i <= finish; i++) {
                if(!dict[s.charAt(i)]){
                    dict[s.charAt(i)] = 1
                    currString = currString + s.charAt(i)
                    if(currString.length>maxSub.length){
                        maxSub = currString
                    }

                }else{
                    break
                }
            }
            dict = {}

        }
    }
    return  maxSub.length
};

lengthOfLongestSubstring2("pwwkew")