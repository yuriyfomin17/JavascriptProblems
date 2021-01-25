// Time complexity is O(N)
// Space COmplexity is Omax(s,t) since we store at most longest string
const isAnagram = function (s, t) {
    if(s.length!==t.length){
        return false
    }
    const dict = {}
    debugger
    for (let i = 0; i < s.length; i++) {
        if (dict[s.charAt(i)] === undefined) {
            dict[s.charAt(i)] = 1
        }else if (dict[s.charAt(i)] !== undefined) {
            dict[s.charAt(i)] = dict[s.charAt(i)] + 1
        }
        if (dict[t.charAt(i)] === undefined) {
            dict[t.charAt(i)] = -1
        } else if (dict[t.charAt(i)] !== undefined) {
            dict[t.charAt(i)] = dict[t.charAt(i)] - 1
        }
    }
    for(let [key, value] of Object.entries(dict)){
        if(value!==0){
            return false
        }
    }
    return true
};