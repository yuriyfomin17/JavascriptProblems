/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// Brute Force approach which has O(N^2) time complexity
// Space complexity is O(N)
const twoSum = function (numbers, target) {
    const result = []
    for (let i = 0; i < numbers.length; i++) {
        let remainder = target - numbers[i]
        let secondIndex = numbers.indexOf(remainder, i + 1)
        if (secondIndex !== -1) {
            result.push(i + 1)
            result.push(secondIndex + 1)
            return result
        }
    }
    return result
};
// Time Complexity if O(N) where N is the element. We visit each element at most once
// Space complexity is O(1). As we use only 2 indexes so space complexity is O(1)
const twoSum = function (numbers, target) {
    let low = 0
    let high = numbers.length - 1
    let sum
    while (low < high) {
        sum = numbers[low] + numbers[high]
        if (sum === target) {
            return [low + 1, high + 1]
        } else {
            if (sum < target) {
                low += 1
            } else {
                high -= 1
            }
        }
    }
    return []
};