/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    /**
     * 排序，时间复杂度O(NlogN)，空间复杂度O(logN)
     */
    // nums.sort((a, b) => b - a)
    // return Math.max(nums[0] * nums[1] * nums[2], nums[0] * nums[nums.length - 1] * nums[nums.length - 2])
    /**
     * 线性，时间复杂度O(N)，空间复杂度O(1)
     */
    let min1 = Number.MAX_SAFE_INTEGER, min2 = Number.MAX_SAFE_INTEGER, max1 = Number.MIN_SAFE_INTEGER, max2 = Number.MIN_SAFE_INTEGER, max3 = Number.MIN_SAFE_INTEGER
    for (const item of nums) {
        if (item < min1) {
            min2 = min1
            min1 = item
        } else if (item < min2) {
            min2 = item
        }
        if (item > max1) {
            max3 = max2;
            max2 = max1;
            max1 = item;
        } else if (item > max2) {
            max3 = max2;
            max2 = item;
        } else if (item > max3) {
            max3 = item;
        }
    }
    return Math.min(max1 * max2 * max3, min1 * min2 * max1)
};
// @lc code=end

