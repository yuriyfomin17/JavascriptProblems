/**
 * @param {string} s
 * @return {string}
 */
// Time COmplexity is O(N) since we iterate 3 times
    // Space Complexity is O(N) since we store 2*N elements in dict1 and dict2
const frequencySort = function (s) {
    const dictEl = {}
    const dictCount = {}
    debugger
    s = s.split('')
    s.map(el => {
        if (!dictEl[el]) {
            dictEl[el] = 1
        } else {
            dictEl[el] = dictEl[el] + 1
        }
    })
    for (let [key, value] of Object.entries(dictEl)) {
        if (!dictCount[value]) {
            dictCount[value] = [key.repeat(value)]
        } else {
            dictCount[value].push(key.repeat(value))
        }
    }
    let string = ''
    for (let i = s.length; i >= 1; i--) {
        if(dictCount[i]){

            string = string + dictCount[i].reduce((acc,val)=>acc+val,'')
        }

    }
    return string
};
frequencySort(
    "tree")
