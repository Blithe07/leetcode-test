/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    /** 
     * 哈希表,时间复杂度O(N)，空间复杂度O(N) 
     */
    // const map = new Map()
    // let max = 0
    // for (const num of nums) {
    //     map.set(num, (map.get(num) || 0) + 1)
    // }
    // for (const num of map.keys()) {
    //     if (map.has(num + 1)) {
    //         max = Math.max(max, map.get(num + 1) + map.get(num))
    //     }
    // }
    // return max
    /**
     * 滑动窗口，时间复杂度O(NlogN)，空间复杂度O(1)
     */
    nums.sort((a, b) => a - b)
    let max = 0, begin = 0
    for (let end = 0; end < nums.length; end++) {
        while (nums[end] - nums[begin] > 1) {
            begin++
        }
        if (nums[end] - nums[begin] === 1) {
            max = Math.max((end - begin + 1), max)
        }
    }
    return max
};
// @lc code=end

console.log(findLHS([1, 1, 1, 1, 1, 1]));