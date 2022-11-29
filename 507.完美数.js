/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    if (num === 1) return false
    let sum = 1
    for (let d = 2; d * d < num; d++) {
        if (num % d === 0) {
            sum += d
            sum += Math.floor(num / d)
        }
    }
    return sum === num
};
// @lc code=end

