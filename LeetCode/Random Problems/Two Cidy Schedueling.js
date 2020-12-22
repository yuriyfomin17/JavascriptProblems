/**
 * @param {number[][]} costs
 * @return {number}
 */

// Space Complexity is O(Nlog(N)) because sorting takes NlogN time
// Space Complexity is O(1) time since we don't utilize any extra space
const twoCitySchedCost = function (costs) {
    costs.sort(function (a, b) {
        if (a[0] - a[1] > b[0] - b[1]) {
            return 1
        } else {
            return -1
        }
    })
    let minCost = 0
    for(let i =0; i<costs.length;i++ ){
        if(i+1<=costs.length/2){
            minCost = minCost + costs[i][0]
        }else{
            minCost = minCost + costs[i][1]
        }
    }
    return minCost
};