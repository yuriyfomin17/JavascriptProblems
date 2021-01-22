/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
    const output = []
    const helper = (remainder, path, start) => {
        if (remainder < 0) {
            return
        }
        if (remainder === 0) {
            output.push([...path])
        }
        for (let i = start; i < candidates.length; i++) {
            helper(remainder - candidates[i], [...path, candidates[i]], i)
        }
    }
    helper(target,[], 0)
    return output
};

console.log(
    combinationSum(
        [2, 3, 6, 7], 7
    )
)