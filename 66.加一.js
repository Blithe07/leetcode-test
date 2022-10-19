/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    // case 1: 0 => 1
    // case 2: 9 => 10
    const len = digits.length
    for (let i = len - 1; i >= 0; i--) {
        digits[i]++
        if (digits[i] !== 10) {
            return digits
        } else {
            digits[i] = 0
        }
        if (digits[0] === 0) {
            digits.unshift(1)
            return digits
        }
    }
};
// @lc code=end