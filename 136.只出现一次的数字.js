/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    /**
     * 排序遍历
     */
    // nums = nums.sort()
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] === nums[i + 1]) {
    //         i = i + 1
    //     } else {
    //         console.log(nums[i]);
    //         return nums[i]
    //     }
    // }
    /**
     * 位运算
     */
    let single
    for (const num of nums) {
        single ^= num
    }
    return single
};
// @lc code=end

singleNumber([4, 1, 2, 1, 2])