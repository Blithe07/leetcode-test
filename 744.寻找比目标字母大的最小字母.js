/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    /**
     * 线性查找，时间复杂度O(N)，是、空间复杂度O(1)
     */
    // for (let i = 0; i < letters.length; i++) {
    //     if (letters[i] > target) {
    //         return i
    //     }
    // }
    // return letters[0]
    /**
     * 二分查找，时间复杂度O(log)，是、空间复杂度O(1)
     */
    if (target >= letters[letters.length - 1]) return letters[0]
    let left = 0, right = letters.length - 1
    while (left < right) {
        const mid = (left + right) >> 1
        if (letters[mid] > target) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return letters[left]
};
// @lc code=end

