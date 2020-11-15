/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let right = n
        let left = 1
        while (left < right) {
            let guess = Math.floor((left + right) / 2)
            if(isBadVersion(guess)){
                right = guess
            }else {
                left = guess + 1
            }
        }
        return left
    };
};