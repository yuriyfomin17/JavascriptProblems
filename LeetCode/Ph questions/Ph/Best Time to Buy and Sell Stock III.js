/**
 * @param {number[]} prices
 * @return {number}
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let cost1 = Infinity;
    let cost2 = Infinity;
    debugger
    return prices.reduce(
        ([profit1, profit2], price) => {
            cost1 = Math.min(cost1, price);
            profit1 = Math.max(profit1, price - cost1)

            cost2 = Math.min(cost2, price - profit1);
            profit2 = Math.max(profit2, price - cost2)

            return [profit1, profit2]
        },
        [0, 0]
    )[1];
};
maxProfit(
    [3,3,5,0,0,3,1,4])