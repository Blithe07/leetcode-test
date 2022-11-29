/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
    if (num === 0) return '0'
    const isNegative = num < 0
    num = Math.abs(num)
    const result = []
    while (num) {
        result.push(num % 7)
        num = Math.floor(num / 7)
    }
    if (isNegative) {
        result.push('-')
    }
    return result.reverse().join('')
};
// @lc code=end

