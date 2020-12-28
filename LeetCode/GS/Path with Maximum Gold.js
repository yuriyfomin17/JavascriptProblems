const getMaximumGold = function (grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] !== 0) count = Math.max(count, maxGold(grid, i, j));
        }
    }
    return count;
};


function maxGold(grid, row = 0, col = 0, count = 0) {
    if (row >= grid.length || col >= grid[0].length || row < 0 || col < 0) {
        return count;
    } else if (grid[row][col] !== 0) {
        count += grid[row][col];
        let temp = grid[row][col];
        grid[row][col] = 0;
        let left = maxGold(grid, row - 1, col, count);
        let right = maxGold(grid, row + 1, col, count);
        let top = maxGold(grid, row, col - 1, count);
        let bottom = maxGold(grid, row, col + 1, count);
        grid[row][col] = temp;
        return Math.max(left, right, top, bottom);
    } else {
        return count;
    }
}