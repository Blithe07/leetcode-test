/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let len = nums.length
    let total = 0
    while (len) {
        total += len
        len--
    }
    for (const n of nums) {
        total -= n
    }
    return total
};
// @lc code=end
