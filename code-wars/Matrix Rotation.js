// Given a matrix represented as a list of string, such as

// ###.....
// ..###...
// ....###.
// .....###
// .....###
// ....###.
// ..###...
// ###.....

// write a function
//
// rotateClockwise(matrix)
//
// that return its 90° clockwise rotation, for our example:

// #......#
// #......#
// ##....##
// .#....#.
// .##..##.
// ..####..
// ..####..
// ...##...
function rotateClockwise(matrix) {
    const result = []
    for (let i = 0; i < matrix.length; ++i) {
        let currElem = matrix[i].split("")
        if (result.length !== 0) {
            currElem.map(function (el, index) {
                result[index] = result[index].padStart(result[index].length + 1, el)
            })
        }else{
            currElem.map(function (el) {
                result.push(el)
            })
        }

    }
    return result


}

rotateClockwise(["a", "b", "c"])