var numberOfSubstrings = function(s) {
    let res = 0;
    let obj = {'A': 0, 'B': 0, 'C': 0};
    let j = 0;
    debugger
    for (let i = 0; i < s.length; i++) {
        obj[s[i]]++;
        while (obj['A']>0 && obj['B']>0 && obj['C']>0) {
            res += s.length-i;
            obj[s[j++]]--;
        }
    }
    return res;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};

console.log(
    numberOfSubstrings("PQACBA")
)