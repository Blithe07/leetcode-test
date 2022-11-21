/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    /**
     * 空间复杂度O(1)，时间复杂度O(k)k为阶梯行数
     */
    // let i = 1
    // let result = 0
    // while (n > 0) {
    //     if (n < i) {
    //         return result
    //     } else {
    //         n -= i++
    //         result++
    //     }
    // }
    // return result
    /**
     * 空间复杂度O(1)，时间复杂度O(logN)
     */
    // let left = 1, right = n;
    // while (left < right) {
    //     const mid = ((right - left + 1) >> 1) + left;
    //     if (mid * (mid + 1) <= 2 * n) {
    //         left = mid;
    //     } else {
    //         right = mid - 1;
    //     }
    // }
    // return left;
    /**
     * 空间复杂度O(1)
     */
    return Math.floor((Math.sqrt(8 * n + 1) - 1) / 2);
};
// @lc code=end

