/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    // Math.pow(3,19)
    return n > 0 && 1162261467 % n === 0;
};
// @lc code=end

