/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const len = nums.length
    if (len === 0) return 0
    // 第一个肯定不重复
    let fast = 1, slow = 1
    while (fast < len) {
        // 快指针和前一个不一致，替换并慢指针移动
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast]
            slow++
        }
        // 快指针一直走
        fast++
    }
    return slow
};
// @lc code=end