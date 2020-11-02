/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
    if(haystack===''&& needle==='' || haystack.length>0 && needle===''){
        return 0
    }
    const arr = haystack.split(needle)
    if (arr.length > 1) {
        let firsElem = arr[0]
        return firsElem.length
    } else {
        return -1
    }
};
console.log(strStr('', ''))
