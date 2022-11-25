/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    let result = 0, expired = 0
    for (const item of timeSeries) {
        if (item >= expired) {
            result += duration
        } else {
            result += item + duration - expired
        }
        expired = item + duration
    }
    return result
};
// @lc code=end

