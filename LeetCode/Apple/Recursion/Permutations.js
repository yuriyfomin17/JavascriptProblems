/**
 * @param {number[]} nums
 * @return {number[][]}
 */


// Time Complexity algorithm performs better than O(N*N!) and a bit slower than O(N!)
    // Space Complexity O(N!) since one has to keep N! solutions
const permute = function (nums) {
    if (nums.length === 0) {
        return []
    }
    const queue = [[[], nums]]
    const result = []
    debugger
    while (queue.length) {
        let [rest,currNums] = queue.shift()
        if (currNums.length === 0) {
            result.push(rest)
        }
        let size = currNums.length
        for (let i = 0; i < size; i++) {
            const copeArr = currNums.slice()
            let [removedElem] = copeArr.splice(i, 1)
            queue.push([[...rest, removedElem], copeArr])
        }
    }
    return result
};

console.log(
    permute(
        [1, 2, 3]
    )
)


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute1 = function (nums) {
    debugger
    const output = [];
    /**
     * The goal is break down the problem by finding permutations in subarrays.
     * So we will maintain a subarray of fixed elements and a subarray for
     * exploring permutations.
     *
     *                  [1], [2, 3]    [1, 2], [3]    [1, 2, 3]
     * [], [1, 2, 3] -> [2], [1, 3] -> [1, 3], [2] -> [1, 3, 2]
     *                  [3], [1, 2]    [2, 1], [1]    [2, 1, 3]
     *                                 [2, 3], [1]    [2, 3, 1]
     *                                 [3, 1], [2]    [3, 1, 2]
     *                                 [3, 2], [1]    [3, 2, 1]
     */
    const dfs = (curr, rest) => {
        // base case. Found a permutation because there's nothing else to explore.
        if (rest.length === 0) {
            output.push(curr);
            return;
        }
        for (let i = 0; i < rest.length; i++) {
            dfs([...curr, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
        }
    }
    dfs([], nums);

    return output;
};





