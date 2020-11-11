/**
 * @param {number[]} prices
 * @return {number}
 */
// TIme Complexity is O(n^2) as loops run n*(n-1)/2
// Space Complexity is O(1)
const maxProfit = function (prices) {
    let maxProfit = 0
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] - prices[i] > maxProfit) {
                maxProfit = prices[j] - prices[i]
            }
        }
    }
    return maxProfit
};

maxProfit([2, 4, 1])


const maxProfit2 = function (prices) {
    let minPrice = Infinity
    let maxProfit = 0
    for (let i = 0; i < prices.length; i++) {
        if(prices[i]<minPrice){
            minPrice = prices[i]
        }else if(maxProfit< prices[i]-minPrice){

            maxProfit = prices[i]-minPrice
        }

    }
    return maxProfit
};