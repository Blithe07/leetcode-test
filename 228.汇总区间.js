/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    const len = nums.length
    const result = []
    let i = 0
    while (i < len) {
        const low = i
        i++
        while (i < len && nums[i] === nums[i - 1] + 1) {
            i++
        }
        const high = i - 1
        high > low ? result.push(`${nums[low]}->${nums[high]}`) : result.push(`${nums[low]}`)
    }
    return result
};
// @lc code=end
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
