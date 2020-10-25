const numIslands = function (grid) {
    debugger
    let count = 0
    const rows = grid.length
    const columns = grid[0].length
    grid.map((element, row) => {
        grid[row].map((element, column) => {
            if (element === '1') {
                count += 1
                markVisited(row, column)
            }
        })
    })
    function markVisited (row, column)  {
        if (row < 0 || column < 0 || row >= rows || column >= columns || grid[row][column] === '0') {
            return
        }
        grid[row][column] = '0';
        markVisited(row, column+1)
        markVisited(row, column-1)
        markVisited(row+1, column)
        markVisited(row-1, column)
    }
    return count
};

console.log(numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]))

//Time Complexity: O(m*n), m = height (number of rows), n = width (number of columns)
//Space Complexity: O(m*n) due to recursion: we have drawn implicit graphs