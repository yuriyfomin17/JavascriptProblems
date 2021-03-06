/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
const reachingPoints = function (sx, sy, tx, ty) {
    while (tx >= sx && ty >= sy) {
        if (sx === tx && sy === ty) {
            return true
        }
        if (tx > ty) {
            tx -= ty
        } else {
            ty -= tx
        }
    }
    return false
};
// Time Complexity is O(log(tx, ty))
// Space Complexity is O(1)
const reachingPoints2 = function (sx, sy, tx, ty) {
    debugger
    while (tx >= sx && ty >= sy) {
        if (tx === ty) {
            break
        }
        if (tx > ty) {
            if (ty > sy) {
                tx %= ty
            } else {
                return (tx - sx) % ty === 0
            }
        } else {
            if (tx > sx) {
                ty %= tx
            } else {
                return (ty - sy) % tx === 0
            }
        }

    }
    return (tx === sx && ty === sy)
};

console.log(
    reachingPoints2(1, 1, 3, 5)
)