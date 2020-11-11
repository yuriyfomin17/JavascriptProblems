const UndergroundSystem = function () {
    this.start = {}
    this.end = {}

};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
    if (this.start[stationName]) {
        this.start[stationName].push(t)
    } else {
        this.start[stationName] = [t]
    }

};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
    if (this.end[stationName]) {
        this.end[stationName].push(t)
    } else {
        this.end[stationName] = [t]
    }

};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
    let arrStart = this.start[startStation]
    let arrEnd = this.end[endStation]
    let size = arrStart.length
    if (arrEnd.length > arrStart.length) {
        size = arrStart.length
    }else if(arrEnd.length < arrStart.length){
        size = arrEnd.length
    }
    let sumStart = 0
    let sumEnd = 0
    for (let i = 0; i < size; i++) {
        sumStart = sumStart + arrStart[i]
        sumEnd = sumEnd + arrEnd[i]
    }
    return (sumEnd - sumStart) / size

};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
debugger
const undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(45, "Leyton", 3);
undergroundSystem.checkIn(32, "Paradise", 8);
undergroundSystem.checkIn(27, "Leyton", 10);
undergroundSystem.checkOut(45, "Waterloo", 15);
undergroundSystem.checkOut(27, "Waterloo", 20);
undergroundSystem.checkOut(32, "Cambridge", 22);
console.log(
    undergroundSystem.getAverageTime("Paradise", "Cambridge")

)
console.log(
    undergroundSystem.getAverageTime("Leyton", "Waterloo")
)
