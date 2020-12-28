// Time Complexity is O(N) where N is the length of string
// Space Complexity is O(1)
const myAtoi = function(str) {
    str = str.replace(/^\s+/, ''); // remove leading spaces
    let num = str.match(/^[\+\-]?\d+/); // find a match
    if(!num) return 0;
    return Math.min(Math.max(+num[0], Math.pow(2, 31)*-1), Math.pow(2, 31)-1);
};
console.log(
    myAtoi("   +0 123")
)