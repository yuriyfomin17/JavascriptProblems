const canVisitAllRooms = function (rooms) {
    debugger
    const length = rooms.length
    let result = true
    for(let i = 0; i<rooms.length; i++) {
        let currRow = rooms[i]
        if (i !== length - 1) {
            if (!currRow.includes(i + 1) ) {
                return false
            }
        }
    }

    return true
};

console.log(canVisitAllRooms([[1],[2],[],[3]]))