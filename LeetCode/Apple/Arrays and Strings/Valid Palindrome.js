/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
    if(s.length===0){
        return true
    }
    const arr = []
    debugger
    s = s.toLowerCase().split('').map(el=>{
        if(el.match(/^[0-9a-zS+]+$/)){
            arr.push(el)
        }
    })

    for (let i = 0; i < arr.length/2; i++) {
        if(arr[i]!==arr[arr.length-1-i] ){
            return false
        }
    }
    return true
};

console.log(
    isPalindrome("A man, a plan, a canal: Panama")

)
// Time Complexity is O(N)
// Space Complexity is O(1)
var isPalindrome = function(s) {
    if(s.length === 1) return true
    let l = 0
    let r = s.length - 1

    while(l < r){
        while(l < r && s[l] && !s[l].match(/^[a-z0-9]+$/i)) l++
        while(l < r && s[r] && !s[r].match(/^[a-z0-9]+$/i)) r--

        if(l < r && s[l].toLowerCase() !== s[r].toLowerCase()) return false

        l++
        r--
    }
    return true
};

