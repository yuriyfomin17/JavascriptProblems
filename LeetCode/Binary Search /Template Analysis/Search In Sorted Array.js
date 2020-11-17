/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
// Given an array find the target and return its index
    // 1.Array is sorted
    // 2.You can access array through ArrayReader.get(K)
    // 3.Size of an array is unknown
    // Time Complexity is O(log(T)) where T is the index of the target.
    // Firstly we set up the boundaries  T is located between 2^k... 2^k+1
    // and 2^k<T<=2^k+1 this means that we need log(T) steps to reach it
    // binary search takes O(log(T)) and proved by master theorem
    //
    // Space Complexity is O(1)
const search = function (reader, target) {

        let left = 0
        let right = 1
        while (reader.get(right) < target) {
            right = right * 2
        }
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            let value = reader.get(mid)
            if (value === target) {
                return mid
            }
            if (target > value) {
                left = mid + 1
            } else {
                right = mid - 1
            }


        }
        return -1
    }