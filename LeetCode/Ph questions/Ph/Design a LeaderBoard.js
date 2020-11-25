function Player(id, score) {
    this.id = id
    this.score = score

}

// Time Complexity is O(1) for adding and reseting while for sorting is O(Nlog(N))
// Space Complexity is O(2N) since we store N players in dict and N players in arr
const Leaderboard = function () {
    this.dict = {}
    this.arr = []
};

/**
 * @param {number} playerId
 * @param {number} score
 * @return {void}
 */

Leaderboard.prototype.addScore = function (playerId, score) {
    if (!this.dict[playerId]) {
        const node = new Player(playerId, score)
        this.dict[playerId] = node
        this.arr.push(node)
    } else {
        const node = this.dict[playerId]
        node.score += score
    }
};

/**
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function (K) {
    this.arr.sort(function (a, b) {
        if (a.score >= b.score) {
            return 1
        } else {
            return -1
        }
    })

    let start = this.arr.length  - K
    let sum = 0
    while (start < this.arr.length) {
        sum += this.arr[start].score
        start += 1
    }
    return sum
};

/**
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function (playerId) {
    if (this.dict[playerId]) {
        const node = this.dict[playerId]
        node.score = 0
    }

};