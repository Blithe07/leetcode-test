/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0 || x === 1) return x
    const find = function (left, right) {
        if (right - left <= 1) {
            return left
        }
        let mid = Math.floor((left + right) / 2)
        if (mid * mid > x) {
            right = mid
        } else {
            left = mid
        }
        return find(left, right)
    }
    return find(0, x)
};
// @lc code=end