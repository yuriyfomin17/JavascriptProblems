/**
 * @param {number[]} prices
 * @return {number}
 */
// TIme Complexity is O(n) as we iterate only one time
// Space Complexity is O(1)

const maxProfit = function (prices) {
    if (prices.length === 0) {
        return 0
    }
    let minStock = Infinity
    let maxProfit = -Infinity
    for (let i = 0; i < prices.length; i++) {
        if (minStock > prices[i]) {
            minStock = prices[i]
        }
        if (prices[i] - minStock > maxProfit) {
            maxProfit = prices[i] - minStock
        }
    }
    return maxProfit
};

const maxProfit = function (prices) {
    if (prices.length === 0) {
        return 0
    }
    let minStock1 = Infinity
    let maxProfit1 = -Infinity


    for (let i = 0; i < prices.length; i++) {
        // the maximum profit if only one transaction allowed
        minStock1 = Math.min(minStock1, prices[i])
        maxProfit1 = Math.max(maxProfit1, prices[i] - minStock1)


    }


    return maxProfit1

};