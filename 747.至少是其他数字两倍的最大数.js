/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    let max1 = Number.MIN_SAFE_INTEGER, max2 = Number.MIN_SAFE_INTEGER
    let index = -1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max1) {
            max2 = max1
            max1 = nums[i]
            index = i
        } else if (nums[i] > max2) {
            max2 = nums[i]
        }
    }
    return m1 >= m2 * 2 ? index : -1
};
// @lc code=end

