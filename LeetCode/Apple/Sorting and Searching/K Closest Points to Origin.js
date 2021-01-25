/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */

// TIme Complexity is O(NlogN) since we involve sorting
    // Space complexity excluding the result is O(1)
const kClosest = function (points, K) {
    const result = []
    debugger
    points.sort(function (a, b) {
        let [xa, ya] = a
        let [xb, yb] = b
        let distanceA = Math.sqrt(Math.pow(xa, 2) + Math.pow(ya, 2))
        let distanceB = Math.sqrt(Math.pow(xb, 2) + Math.pow(yb, 2))
        if (distanceA > distanceB) {
            return 1
        } else {
            return -1
        }
    })
    for (let i = 0; i < points.length && result.length < K; i++) {
        result.push(points[i])
    }
    return result
};


var kClosest2 = function(points, K) {
    debugger
    let l = 0;
    let r = points.length - 1;

    while (l <= r) {
        let m = partition(points, l, r);
        if (m === K) {
            break;
        } else if (m < K) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return points.slice(0, K);
};

function partition(points, l, r) {
    let pivot = points[l];

    while (l < r) {
        while (l < r && compare(points[r], pivot) >= 0) r--;
        points[l] = points[r];
        while (l < r && compare(points[l], pivot) <= 0) l++;
        points[r] = points[l];
    }

    points[l] = pivot;
    return l;
}

function compare(a, b) {
    return (a[0] * a[0] + a[1] * a[1]) - (b[0] * b[0] + b[1] * b[1]);
}

console.log(
    kClosest2([[3,3],[5,-1],[-2,4]],2)
)
