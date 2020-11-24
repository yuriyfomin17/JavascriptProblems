const UndergroundSystem = function () {
    this.checkInTime = {}
    this.checkInStation = {}
    this.averageJourney = {}
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
    this.checkInTime[id] = t
    this.checkInStation[id] = stationName
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
    const key = '' + this.checkInStation[id] + ',' + stationName
    if (this.averageJourney[key]) {
        const timeTravelled = t - this.checkInTime[id]
        this.averageJourney[key][0] = this.averageJourney[key][0] + timeTravelled
        this.averageJourney[key][1] = this.averageJourney[key][1] + 1
    } else {
        const timeTravelled = t - this.checkInTime[id]
        this.averageJourney[key] = [timeTravelled, 1]
    }

};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
    const key = '' + startStation + ',' + endStation
    if (this.averageJourney[key]) {
        return this.averageJourney[key][0] / this.averageJourney[key][1]
    }
};

const undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(45, "Leyton", 3);
undergroundSystem.checkIn(32, "Paradise", 8);
undergroundSystem.checkIn(27, "Leyton", 10);
undergroundSystem.checkOut(45, "Waterloo", 15);
undergroundSystem.checkOut(27, "Waterloo", 20);
undergroundSystem.checkOut(32, "Cambridge", 22);

console.log(
    undergroundSystem.getAverageTime("Paradise", "Cambridge")
)// return 14.00000. There was only one travel from "Paradise" (at time 8) to "Cambridge" (at time 22)
undergroundSystem.getAverageTime("Leyton", "Waterloo");          // return 11.00000. There were two travels from "Leyton" to "Waterloo", a customer with id=45 from time=3 to time=15 and a customer with id=27 from time=10 to time=20. So the average time is ( (15-3) + (20-10) ) / 2 = 11.00000
undergroundSystem.checkIn(10, "Leyton", 24);
undergroundSystem.getAverageTime("Leyton", "Waterloo");          // return 11.00000
undergroundSystem.checkOut(10, "Waterloo", 38);
undergroundSystem.getAverageTime("Leyton", "Waterloo");          // return 12.00000
