const frequencySort1 = function(s) {
    let m = new Map();
    debugger
    for (let i = 0; i < s.length; i++)
        m.set(s[i], m.get(s[i])+1 || 1);
    let arr = Array.from(m.entries());
    arr.sort((a,b) => b[1]-a[1]);
    return arr.map(pair => pair[0].repeat(pair[1])).join("");
    // Time Complexity: O(nlog(n))
    // Space Complexity: O(n)
};



/**
 * @param {string} s
 * @return {string}
 */
// Time Complexity is O(N) -mapping + O(Nlog(N))-sorting + O(N) -mapping = O(Nlog(N))
// Space Complexity is O(K) where K is the number of string stored
const frequencySort3 = function (s) {
    let arr = s.split('')
    const set = new Set()
    const dict = {}
    debugger
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
