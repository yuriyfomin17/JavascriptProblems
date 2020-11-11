/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Time complexity is 2* Nlog(N) for sorting two arrays + O(N) for iterating through one array so it is O(N). Since sorting dominates so Time Complexity
// is Nlog(N)
// Space complexity is 2* O(K) where K is the length of the array when both of them are equal
const isAnagram = function (s, t) {
    debugger
    if (s.length === t.length) {
        const arr1 = s.split('').sort((a, b) => {
            return a.charCodeAt(0) - b.charCodeAt(0)
        })
        const arr2 = t.split('').sort((a, b) => {
            return a.charCodeAt(0) - b.charCodeAt(0)
        })
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false
            }
        }
        return true
    } else {
        return false
    }
};


const isAnagramHash = function (s, t) {
    debugger
    if (s.length === t.length) {
        const dict = {}
        for (let i = 0; i < s.length; i++) {
            if (!dict[s.charAt(i)]) {
                dict[s.charAt(i)] = 1
            } else if (dict[s.charAt(i)]) {
                dict[s.charAt(i)] = dict[s.charAt(i)] + 1
            }

            if (!dict[t.charAt(i)]) {
                dict[t.charAt(i)] = -1
            } else if (dict[t.charAt(i)]) {
                dict[t.charAt(i)] = dict[t.charAt(i)] - 1
            }
        }
        for (let [key, value] of Object.entries(dict)) {
            if (value !== 0) {
                return false
            }
        }
        return true
    } else {
        return false
    }
};
console.log(
    isAnagramHash("anagram", "nagaram")
)
