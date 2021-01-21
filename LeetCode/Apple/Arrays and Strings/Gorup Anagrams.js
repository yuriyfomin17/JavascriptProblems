/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// Time Complexity: O(n*k) where n is the size of input array and k is the maximum length of string in input array
// Space Complexity: O(n)
var groupAnagrams1 = function(strs) {
    let res = {};
    debugger
    for (let str of strs) {
        let count = new Array(26).fill(0);
        for (let char of str) count[char.charCodeAt()-97]++;
        let key = count.join("#");
        res[key] ? res[key].push(str) : res[key] = [str];
    }
    return Object.values(res);
};

// TIme complexity is O(N*k*logk) where k is the length of the string and Nis the number of strings in array
// Space Complexity is O(N)  where N is the number of strings
const groupAnagrams2 = strs => {
    const map = {};
    for (let str of strs) {
        const sorted = str.split('').sort().join('');
        map[sorted] !== undefined ? map[sorted].push(str) : map[sorted] = [str];
    }
    return Object.values(map);
};
// const groupAnagrams3 = function (strs) {
//     const result = []
//     let currResult
//     strs.map((firstString, index1) => {
//         strs.map((secondString, index2) => {
//             if (index2 !== 0) {
//                 strs.splice(index1,1)
//                 if (secondString.length === firstString.length) {
//                     currResult = [firstString]
//                     const dict = {}
//                     for (let i = 0; i < secondString.length; i++) {
//                         if (!dict[firstString[i]]) {
//                             dict[firstString[i]] = 1
//                         } else {
//                             dict[firstString[i]] = dict[firstString[i]] + 1
//                         }
//                         if (!dict[secondString[i]]) {
//                             dict[secondString[i]] = -1
//                         } else {
//                             dict[secondString[i]] = dict[secondString[i]] - 1
//                         }
//                     }
//                     let index = true
//                     for (let [key, value] of Object.entries(dict)) {
//                         if (value !== 0) {
//                             index = false
//                             break
//                         }
//                     }
//                     if (index) {
//                         strs.splice(index2,1)
//                         currResult.push(secondString)
//                     }
//
//                 }
//             }
//         })
//         result.push(currResult)
//     })
//     return result
// };
console.log(
    groupAnagrams1(["eat", "tea", "tan", "ate", "nat", "bat"])
)
