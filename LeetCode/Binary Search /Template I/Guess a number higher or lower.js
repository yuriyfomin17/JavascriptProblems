/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return                -1 if num is lower than the guess number
 *                         1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function (n) {
    let left = 0
    let right = n
    while (left<=right) {
        let guessNum = Math.floor((right + left)/2)
        if(guess(guessNum)===1){
            left = guessNum + 1
        }
        if(guess(guessNum)===-1){
             right= guessNum - 1
        }
        if(guess(guessNum)===0){
            return guessNum
        }

    }
};