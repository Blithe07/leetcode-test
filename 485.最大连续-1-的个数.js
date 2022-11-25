/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = 0, i = 0, count = 0
    while (i < nums.length) {
        if (nums[i] === 0) {
            // 结算
            max = Math.max(max, count)
            count = 0
        } else {
            count++
        }
        i++
    }
    return max = Math.max(max, count)
};
// @lc code=end

