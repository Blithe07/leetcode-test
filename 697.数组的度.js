/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    const map = new Map()
    for (const [i, num] of nums.entries()) {
        if (map.has(num)) {
            const arr = map.get(num)
            map.set(num, [++arr[0], arr[1], i])
        } else {
            map.set(num, [1, i, i])
        }
    }
    let maxNum = 0, minLen = 0;
    for (const [count, left, right] of map.values()) {
        const len = right - left + 1
        if (maxNum < count) {
            maxNum = count
            minLen = len
        } else if (maxNum === count) {
            if (minLen > (len)) {
                minLen = len
            }
        }
    }
    return minLen
};
// @lc code=end

