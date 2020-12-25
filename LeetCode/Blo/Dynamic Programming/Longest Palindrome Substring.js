/**
 * @param {string} s
 * @return {string}
 */
// Time Complexity is O(n^2 * k/2) since we iterate N*N and perform each time a check for current string of length k
// Space Complexity is O(K) where K is the length of current string
const longestPalindrome = function (s) {
    let result = ''
    debugger
    for (let start = 0; start < s.length; start++) {
        for (let end = s.length ; end >= 0; end--) {
            let currString = s.slice(start, end)
            let index = true
            for (let i = 0; i < currString.length/2 ; i++) {
                if (currString[i] !== currString[currString.length - 1 - i]) {
                    index = false
                    break
                }
            }
            if (index) {
                if (currString.length > result.length) {
                    result = currString
                }
                if (result.length === s.length) {
                    return result
                }
            }

        }
    }
    return result
};


/**
 * @param {string, null} s
 * @return {string}
 */
// Time Complexity is O(N^2) since expanding palindrome around its center could take O(N) time sor overal Complexity is O(N^2)
// Space Complexity is O(1)
const longestPalindrome2 = function (s) {
    const expandAroundCenter = (s, left, right) => {
        let l = left
        let r = right
        while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
            l -= 1
            r += 1
        }
        // slice the qualified string from the second last iteration
        return s.slice(l + 1, r)
    }
    if (s === null || s.length < 1) {
        return ''
    }
    let result = ''
    debugger
    for (let i = 0; i < s.length; i++) {
        // palindrome can have 2 centers around 1 letter or around 2 letters
        let str1 = expandAroundCenter(s, i, i)
        let str2 = expandAroundCenter(s, i, i + 1)
        const longestPalindrome = str1.length > str2.length ? str1 : str2
        if (longestPalindrome.length > result.length) {
            result = longestPalindrome
        }
    }
    return result

};
console.log(
    longestPalindrome2("acca")
)
