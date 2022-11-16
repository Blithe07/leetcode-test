/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    // 去重排序数组
    const arr = Array.from(new Set(nums)).sort((a, b) => b - a)
    return arr[2] ?? arr[0] 
};
// @lc code=end

