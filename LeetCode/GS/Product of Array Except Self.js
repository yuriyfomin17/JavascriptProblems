/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Time Complexity is O(N) where N is the number of elements in the input array
    // Space complexity is O(1)
const productExceptSelf = function (nums) {
    // the length of the input array
    const length = nums.length

    // Final answer to be returned
    const answer = [1]

    // answer [i] contains the product of all the elements to the left
    // But for the elements at index 0, there are no elements to the left
    // so the answer[0] would be 1
    for (let i = 1; i < length; i++) {
        // answer[i-1] already contains the product of the elements to the left
        // of 'i-1'
        // Simply multiplying it with nums[i-1] would give the product of all
        // elements to the left of index 'i'
        answer[i] = nums[i - 1] * answer[i - 1]
    }

    // R contains the product of all the elements to the right
    // For the element at index 'length -1', there are no elements to the right
    // Hence R would be 1
    let R = 1

    for (let i = length - 1; i >= 0; i--) {
        // For the index 'i', R would contain
        // the product of all elements to the right. We update R accordingly

        answer[i] = answer[i] * R
        R = R * nums[i]
    }
    return answer
};
console.log(
    productExceptSelf([1, 0])
)
