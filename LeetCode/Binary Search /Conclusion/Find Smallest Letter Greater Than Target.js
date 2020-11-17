/**
 * @param {string[]} letters
 * @param {string} target
 * @return {string}
 */
// TIme Complexity is O(N) since at most we iterate through all elements
// Space Complexity is O(1)
const nextGreatestLetter = function (letters, target) {
    for(let i = 0; i<letters.length; i++){
        if(letters[i]>target){
            return letters[i]
        }
    }
    return letters[0]
};
//Time Complexity is O(log(N)) where N is the length of letters
// Space Complexity is O(1)
const nextGreatestLetter = function (letters, target) {
    debugger
    let left = 0
    let right = letters.length
    let mid
    while (left < right) {
        mid = Math.floor((left + right) / 2)

        if (target >= letters[mid]) {
            left = mid + 1
        } else  {
            right = mid
        }
    }

    return letters[left % letters.length]

};
console.log(
    nextGreatestLetter(["c", "f", "j"], 'f')
)
