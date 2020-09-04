//Build Tower
//
//Build Tower by the following given argument:
//number of floors (integer and always greater than 0).
//
// Tower block is represented as *
//
// JavaScript: returns an Array;
// Have fun!

function towerBuilder(nFloors) {
    // build here
    const result = []
    let count = 0
    for (let i = nFloors - 1; i >= 0; --i) {
        let currString = "*".repeat(2 * i + 1)
        currString = currString.padStart(currString.length + count)
        currString = currString.padEnd(currString.length + count)
        result.unshift(currString)
        ++count

    }
    return result
}

console.log(towerBuilder(3))
