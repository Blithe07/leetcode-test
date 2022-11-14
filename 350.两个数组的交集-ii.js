/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    /**
     * 时间复杂度：O(m+n),空间复杂度：O(min(m,n))
     */
    // if (nums2.length > nums1.length) {
    //     intersect(nums2, nums1)
    // }
    // const map = new Map()
    // nums1.forEach(item => {
    //     if (map.has(item)) {
    //         const num = map.get(item)
    //         map.set(item, num + 1)
    //     } else {
    //         map.set(item, 1)
    //     }
    // });
    // const result = []
    // nums2.forEach(item => {
    //     if (map.has(item)) {
    //         const num = map.get(item)
    //         map.set(item, num - 1)
    //         result.push(item)
    //         if (num === 1) {
    //             map.delete(item)
    //         }
    //     }
    // })
    // return result
    /**
     * 时间复杂度：O(m*log m+n*log n)，空间复杂度：O(min(m,n))
     */
    nums1.sort((a, b) => (a - b))
    nums2.sort((a, b) => (a - b))
    const len1 = nums1.length, len2 = nums2.length
    const result = []
    let i1 = 0, i2 = 0, i = 0
    while (i1 < len1 && i2 < len2) {
        if (nums1[i1] < nums2[i2]) {
            i1++
        } else if (nums1[i1] > nums2[i2]) {
            i2++
        } else {
            result[i] = nums1[i1]
            i1++
            i2++
            i++
        }
    }
    return result
};
// @lc code=end
