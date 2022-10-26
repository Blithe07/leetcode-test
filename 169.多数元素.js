/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    /**
     * 哈希表，空间O(N)
     */
    // const map = new Map()
    // for (const num of nums) {
    //     if (!map.has(num)) {
    //         map.set(num, 1)
    //     } else {
    //         map.set(num, map.get(num) + 1)
    //     }
    // }
    // let maxNum = 0
    // let targetKey = null
    // for (const [key, value] of map.entries()) {
    //     if (value > maxNum) {
    //         maxNum = value
    //         targetKey = key
    //     }
    // }
    // return targetKey
    /**
     * 排序中间数，空间O(log n)
     */
    // nums = nums.sort()
    // return nums[nums.length >> 1]
    /**
     * Boyer-Moore 投票算法，空间O(1)
     */
    let count = 0, candidate = null
    for (const num of nums) {
        if (count === 0) {
            candidate = num
        }
        count += num === candidate ? 1 : -1
    }
    return candidate
};
// @lc code=end
