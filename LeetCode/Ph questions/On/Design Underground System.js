// Time Complexity is O(1)
// Space complexity is O(N+ M) where N and M is the size of average and train
var UndergroundSystem = function() {
    this.avg = new Map();
    this.train = new Map();
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, start, t) {
    this.train.set(id, [start, t]);
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, end, t) {
    const [start, s] = this.train.get(id);
    const key = [start, end].join();
    if (this.avg.has(key)) {
        let [avg, cnt] = this.avg.get(key);
        this.avg.set(key, [avg * (cnt/++cnt) + ((t - s)/cnt), cnt]);
    } else {
        this.avg.set(key, [(t - s), 1]);
    }
    this.train.delete(id);
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(start, end) {
    return this.avg.get([start, end].join())[0];
};
debugger
const undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(10, "Leyton", 3);
undergroundSystem.checkOut(10, "Paradise", 8);
undergroundSystem.getAverageTime("Leyton", "Paradise"); // return 5.00000
undergroundSystem.checkIn(5, "Leyton", 10);
undergroundSystem.checkOut(5, "Paradise", 16);
undergroundSystem.getAverageTime("Leyton", "Paradise"); // return 5.50000
undergroundSystem.checkIn(2, "Leyton", 21);
undergroundSystem.checkOut(2, "Paradise", 30);
undergroundSystem.getAverageTime("Leyton", "Paradise"); // return 6.66667