/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    let minStock1 = Infinity
    let maxProfit1 = -Infinity

    let minStock2 = Infinity
    let maxProfit2 = -Infinity
    debugger
    for (let i = 0; i < prices.length; i++) {
        // the maximum profit if only one transaction allowed
        minStock1 = Math.min(minStock1, prices[i])
        maxProfit1 = Math.max(maxProfit1, prices[i] - minStock1)

        // reinvest the gained profit in the second transaction
        minStock2 = Math.min(minStock2, prices[i] - maxProfit1)
        maxProfit2 = Math.max(maxProfit2, prices[i] - minStock2)
    }


    return maxProfit2

};

console.log(
    maxProfit([3, 3, 5, 0, 0, 3, 1, 4])
)