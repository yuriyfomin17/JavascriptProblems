// Time Complexity is O(N) since we iterate only once
// Space Complexity is O(1)
const maxProfit = function (prices) {
    if (prices.length === 0) {
        return 0
    }
    debugger
    let minStock = Infinity
    let maxProfit = -Infinity
    let sum = 0
    for (let i = 0; i < prices.length; i++) {
        if (minStock > prices[i]) {
            minStock = prices[i]
        }

        if (prices[i] - minStock > maxProfit) {

            maxProfit = prices[i] - minStock
            sum += maxProfit

            minStock = prices[i]
            maxProfit = -Infinity
        }
    }
    return sum
};