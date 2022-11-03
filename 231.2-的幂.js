/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    // const isInt = (val) => (typeof val === 'number' && val % 1 === 0)
    // return isInt(Math.log2(n))
    return n > 0 && (n & (n - 1)) === 0
};
// @lc code=end
console.log(isPowerOfTwo(1));