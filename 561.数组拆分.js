/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    nums.sort((a, b) => a - b)
    let result = 0
    for (let i = 0; i < nums.length; i += 2) {
        result += nums[i]
    }
    return result
};
// @lc code=end

