/**
 * @param {number[][]} items
 * @return {number[][]}
 */
// Time Complexity is O(NlogN)
// Space Complexity is O(N)
const highFive = function (items) {
    const ID = {}
    items.sort(function (a, b) {

        if (a[1] >= b[1]) {
            return -1
        } else {
            return 1
        }
    })

    for (let i = 0; i < items.length; i++) {
        if (!ID.hasOwnProperty(items[i][0])) {
            ID[items[i][0]] = [1, items[i][1]]
        } else {
            if (Array.isArray(ID[items[i][0]])) {
                let [count, sum] = ID[items[i][0]]
                if (count < 5) {
                    sum = sum + items[i][1]
                    count = count + 1
                    ID[items[i][0]] = [count, sum]
                    if (count === 5) {
                        let average = Math.floor(sum / count)
                        ID[items[i][0]] = average
                    }
                }
            }

        }
    }
    const result = Array.from(Object.entries(ID))
    return result
};

console.log(
    highFive([[1, 91], [1, 92], [2, 93], [2, 97], [1, 60], [2, 77], [1, 65], [1, 87], [1, 100], [2, 100], [2, 76]], [[1, 87], [2, 88]])
)
