// My Solution
// Time Complexity is O(1) for all check in, check out and getAverage

// Space Complexity: O(P + S^2) where S is the number of stations on the network and P is the number of
// passengers making a journey concurrently during peak time

// P because we only store the P number of passengers in checkInTimes dictionary
// while S^2 where S is the number of stations because we do expect to have every
// possible pair of number of stations
const UndergroundSystem = function () {
    this.checkInTimes = {}
    this.averageJourney = {}
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
    this.checkInTimes[id] = [t, stationName]
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
    const startTime = this.checkInTimes[id][0]
    const startStation = this.checkInTimes[id][1]
    const journeyTime = t - startTime
    const key = '' + startStation + stationName
    if (!this.averageJourney[key]) {
        this.averageJourney[key] = [journeyTime, 1]
    } else {
        let currJourneyTime = this.averageJourney[key][0]
        let numberOfJourneys = this.averageJourney[key][1]
        this.averageJourney[key] = [currJourneyTime + journeyTime, numberOfJourneys + 1]
    }


};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
    const key = '' + startStation + endStation
    return this.averageJourney[key][0] / this.averageJourney[key][1]

};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */

// // Time Complexity is O(1)
// // Space complexity is O(N+ M) where N and M is the size of average and train
// var UndergroundSystem = function () {
//     this.avg = new Map();
//     this.train = new Map();
// };
//
// /**
//  * @param {number} id
//  * @param {string} stationName
//  * @param {number} t
//  * @return {void}
//  */
// UndergroundSystem.prototype.checkIn = function (id, start, t) {
//     this.train.set(id, [start, t]);
// };
//
// /**
//  * @param {number} id
//  * @param {string} stationName
//  * @param {number} t
//  * @return {void}
//  */
// UndergroundSystem.prototype.checkOut = function (id, end, t) {
//     const [start, s] = this.train.get(id);
//     const key = [start, end].join();
//     if (this.avg.has(key)) {
//         let [avg, cnt] = this.avg.get(key);
//         this.avg.set(key, [avg * (cnt / ++cnt) + ((t - s) / cnt), cnt]);
//     } else {
//         this.avg.set(key, [(t - s), 1]);
//     }
//     this.train.delete(id);
// };
//
// /**
//  * @param {string} startStation
//  * @param {string} endStation
//  * @return {number}
//  */
// UndergroundSystem.prototype.getAverageTime = function (start, end) {
//     return this.avg.get([start, end].join())[0];
// };