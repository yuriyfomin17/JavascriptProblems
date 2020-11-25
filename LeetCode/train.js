function Player(id, score) {
    this.id = id
    this.score = score

}

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

debugger
const leaderboard = new Leaderboard();
leaderboard.addScore(1, 73);   // leaderboard = [[1,73]];
leaderboard.addScore(2, 56);   // leaderboard = [[1,73],[2,56]];
leaderboard.addScore(3, 39);   // leaderboard = [[1,73],[2,56],[3,39]];
leaderboard.addScore(4, 51);   // leaderboard = [[1,73],[2,56],[3,39],[4,51]];
leaderboard.addScore(5, 4);    // leaderboard = [[1,73],[2,56],[3,39],[4,51],[5,4]];
leaderboard.top(1);           // returns 73;
leaderboard.reset(1);         // leaderboard = [[2,56],[3,39],[4,51],[5,4]];
leaderboard.reset(2);         // leaderboard = [[3,39],[4,51],[5,4]];
leaderboard.addScore(2, 51);   // leaderboard = [[2,51],[3,39],[4,51],[5,4]];
leaderboard.top(3);           // returns 141 = 51 + 51 + 39;



