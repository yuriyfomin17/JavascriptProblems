/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// Time Complexity is O(min(S,P)) for the best case and better than O(SlogP)
    // for the average case where S and P are lengths of the input string and patttern
    // correspondingly
    // Space Complexity O(1) since it is constant space
const isMatch = function (s, p) {
    const sLength = s.length
    const pLength = p.length

    let sChange = 0
    let pChange = 0

    let startIdx = -1
    let sTempIdx = -1

    while (sChange < sLength) {
        // If the pattern character = string character
        // or pattern character = '?'
        if (pChange < pLength && (p[pChange] === '?' || p[pChange] === s[sChange])) {
            sChange += 1
            pChange += 1
        } else if (pChange < pLength && p[pChange] === '*')
            // If pattern character = '*'
        {
            startIdx = pChange
            sTempIdx = sChange
            pChange += 1
        }
            // If pattern character != string character
            // or pattern is used up
        // and there was no '*' character in pattern
        else if (startIdx === -1) {
            return false
        }
        // If pattern character != string character
        // or pattern is used up
        // and there was '*' character in pattern before
        else {
            // Backtrack: check the situation
            // when '*' matches one more character
            pChange = startIdx + 1
            sChange = sTempIdx + 1
            sTempIdx = sChange
        }
    }
    // The remaining characters in the pattern should all be '*' characters
    for(let i = pChange; i<pLength; i++){
        if(p[i]!=="*"){
            return false
        }
    }
    return true
};