/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
    if (s === '' || s === null) {
        return ''
    }

    let maxPalindrome = ''
    debugger
    const helper = (center) => {
        let currPalindrome = ''
        let left = center
        let right = center
        while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
            currPalindrome = s.slice(left, right + 1)
            left -= 1
            right += 1
        }
        return currPalindrome
    }
    for (let i = 0; i < s.length; i++) {
        let palindromeOne = helper(i)
        let palindromeTwo = helper(i + 1)
        if (palindromeOne.length > palindromeTwo.length) {
            if (palindromeOne.length > maxPalindrome.length) {
                maxPalindrome = palindromeOne
            }
        }else {
            if (palindromeTwo.length > maxPalindrome.length) {
                maxPalindrome = palindromeTwo
            }
        }
        if(maxPalindrome.length===s.length){
            return maxPalindrome
        }
    }
    return maxPalindrome

};

console.log(
    longestPalindrome("babad")
)
