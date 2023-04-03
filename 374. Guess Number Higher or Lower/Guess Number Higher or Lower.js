import guess from 'guess';
/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let lo = 1; let hi = n;
    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2)
        if (guess(mid) == 0) {
            return mid
        } else if (guess(mid) == -1) {
            hi = mid - 1
        } else if (guess(mid) == 1) {
            lo = mid + 1
        }
    }
};

console.log(guessNumber())