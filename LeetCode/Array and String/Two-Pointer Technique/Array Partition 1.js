/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function (nums) {
    const arraySorted = nums.sort((a, b) => {
        if (a > b) {
            return 1
        } else {
            return -1
        }
    })
    let result = 0
    for (let i = 0; i < arraySorted.length; i = i + 2) {
        result = result + Math.min(arraySorted[i], arraySorted[i + 1])
    }

    return result
};