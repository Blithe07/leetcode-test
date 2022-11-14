/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    /**
     * 暴力尝试
     */
    // let n = 1, bool = true
    // while (bool) {
    //     if (n * n === num) {
    //         break
    //     }
    //     if (n * n > num) {
    //         bool = false
    //     }
    //     n++
    // }
    // return bool
    /**
     * 二分
     */
    let left = 0, right = num
    while (left <= right) {
        const mid = left + (right - left >> 1)
        const square = mid * mid
        if (square < num) {
            left = mid + 1
        } else if (square > num) {
            right = mid - 1
        } else {
            return true;
        }
    }
    return false
};
// @lc code=end

