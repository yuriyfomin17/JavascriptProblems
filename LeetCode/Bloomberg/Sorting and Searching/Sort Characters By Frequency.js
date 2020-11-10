/**
 * @param {string} s
 * @return {string}
 */
// Time Complexity is O(N) -mapping + O(Nlog(N))-sorting + O(N) -mapping = O(Nlog(N))
// Space Complexity is O(K) where K is the number of string stored
const frequencySort = function (s) {
    let arr = s.split('')
    const set = new Set()
    const dict = {}
    arr.map(el => {
        set.add(el)
        if (!dict[el]) {
            dict[el] = 1
        } else {
            dict[el] = dict[el] + 1
        }
    })
    arr = Array.from(set)
    arr.sort(function (a, b) {
        if (dict[a] > dict[b]) {
            return -1
        } else {
            return 1
        }

    })

    arr.map((el, index) => {
        arr[index] = el.repeat(dict[el])
    })
    return arr.reduce((acc,val)=>{
        return acc + val
    },'')
};
console.log(frequencySort("loveleetcode"))
