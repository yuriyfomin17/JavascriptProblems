/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function (num) {
    let left = 0
    let right = num
    debugger
    while (left<=right) {
        let guess = Math.floor((left + right)/2)
        if(guess * guess === num){
            return true
        } else if(guess* guess>num){
            right = guess - 1
        }else {
            left = guess+1
        }
    }
    return false
};

console.log(
    isPerfectSquare(5)
)