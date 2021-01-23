function maxDifference(px) {

    if (px.length === 0) {
        return 0
    }
    debugger
    let minStock = Infinity
    let maxProfit = -Infinity
    let sum = 0
    for (let i = 0; i < px.length; i++) {
        if (minStock > px[i]) {
            minStock = px[i]
        }

        if (px[i] - minStock > maxProfit) {

            maxProfit = px[i] - minStock
            sum += maxProfit

            minStock = px[i]
            maxProfit = -Infinity
        }
    }
    return sum
}