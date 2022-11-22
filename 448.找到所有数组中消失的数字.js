/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const len = nums.length
    for (const num of nums) {
        // 减一取余确定索引位置
        // 避免遇到重复值，还原成原始值
        const index = (num - 1) % len
        // 加上len，存在的数一定会大于数组长度，没大于的就是消失是数组
        nums[index] += len
    }
    const result = []
    for (const [index, value] of nums.entries()) {
        if (value <= len) {
            result.push(index + 1)
        }
    }
    return result
};
// @lc code=end

