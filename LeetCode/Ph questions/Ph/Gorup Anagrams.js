/**
 * @param {string[]} strs
 * @return {string[][]}
 */


const groupAnagrams1 = strs => {
    const map = {};
    for (let str of strs) {
        const sorted = str.split('').sort().join('');
        map[sorted] !== undefined ? map[sorted].push(str) : map[sorted] = [str];
    }
    return Object.values(map);
};
const groupAnagrams = function (strs) {
    const result = []
    let currResult
    strs.map((firstString, index1) => {
        strs.map((secondString, index2) => {
            if (index2 !== 0) {
                strs.splice(index1,1)
                if (secondString.length === firstString.length) {
                    currResult = [firstString]
                    const dict = {}
                    for (let i = 0; i < secondString.length; i++) {
                        if (!dict[firstString[i]]) {
                            dict[firstString[i]] = 1
                        } else {
                            dict[firstString[i]] = dict[firstString[i]] + 1
                        }
                        if (!dict[secondString[i]]) {
                            dict[secondString[i]] = -1
                        } else {
                            dict[secondString[i]] = dict[secondString[i]] - 1
                        }
                    }
                    let index = true
                    for (let [key, value] of Object.entries(dict)) {
                        if (value !== 0) {
                            index = false
                            break
                        }
                    }
                    if (index) {
                        strs.splice(index2,1)
                        currResult.push(secondString)
                    }

                }
            }
        })
        result.push(currResult)
    })
    return result
};
console.log(
    groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
)
