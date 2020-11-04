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
        const dict = new Map()
        for (let i = 0; i < s.length; i++) {
            if (!dict.has(s.charAt(i))) {
                dict.set(s.charAt(i), 1)
            }else if(dict.has(s.charAt(i))){
                dict.set(s.charAt(i), dict.get(s.charAt(i)) + 1)
            }

            if (!dict.has(t.charAt(i))) {
                dict.set(t.charAt(i), -1)
            }else if(dict.has(t.charAt(i))){
                dict.set(t.charAt(i), dict.get(t.charAt(i)) - 1)
            }
        }
        let entries = dict.entries()
        for (let [key, value] of entries) {
            if (value !== 0) {
                return false
            }
        }
        return true
    } else {
        return false
    }
};
isAnagramHash("anagram", "nagaram")