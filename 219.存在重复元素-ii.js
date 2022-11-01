/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    /** 哈希表，时间O(N)，空间O(N) */
    // const map = new Map()
    // for (let i = 0, len = nums.length; i < len; i++) {
    //     if (map.has(nums[i]) && Math.abs(map.get(nums[i]) - i) <= k) return true
    //     map.set(nums[i], i)
    // }
    // return false
    /** 滑动窗口，时间O(N)，空间O(K) */
    const set = new Set()
    const length = nums.length
    for (let i = 0; i < length; i++) {
        if (i > k) {
            set.delete(nums[i - k - 1])
        }
        if (set.has(nums[i])) {
            return true
        }
        set.add(nums[i])
    }
    return false
};
// @lc code=end

