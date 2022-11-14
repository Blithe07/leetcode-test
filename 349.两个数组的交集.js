/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    /**
     * 时间复杂度O(M+N),空间复杂度O(M+N),
     */
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    return set_intersection(set1, set2)
};
/**
 * 
 * @param {Set} set1 长集合
 * @param {Set} set2 短集合
 */
const set_intersection = (set1, set2) => {
    if (set2.size > set1.size) {
        set_intersection(set2, set1)
    }
    const result = []
    for (const item of set2) {
        if (set1.has(item)) {
            result.push(item)
        }
    }
    return result
}

// @lc code=end

