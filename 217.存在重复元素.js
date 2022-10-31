/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    /** 哈希表 */
    // const result = new Map()
    // for (let i = 0, len = nums.length; i < len; i++) {
    //     if (result.has(nums[i])) {
    //         return true
    //     }
    //     result.set(nums[i], i)
    // }
    // return false
    /** 集合 */
    // return new Set(nums).size !== nums.length
    /** 排序 */
    nums = nums.sort()
    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] === nums[i + 1]) return true
    }
    return false
};
// @lc code=end

