/*
 * @lc app=leetcode.cn id=693 lang=javascript
 *
 * [693] 交替位二进制数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    /**
     * 遍历，时间复杂度O(N)，空间复杂度O(1)
     */
    // const bitStr = n.toString('2')
    // for (let i = 1; i < bitStr.length; i++) {
    //     if (bitStr[i] === bitStr[i - 1]) {
    //         return false
    //     }
    // }
    // return true
    /**
     * 计算二进制每一位，时间复杂度O(logN)，空间复杂度O(1)
     */
    // let prev = 2
    // while (n !== 0) {
    //     const cur = n % 2
    //     if (cur === prev) return false
    //     prev = cur
    //     n = n >> 1
    // }
    // return true
    /**
     * 位运算，时间复杂度O(1)，空间复杂度O(1)
     */
    const a = n ^ (n >> 1)
    return a & (a + 1) === 0
};
// @lc code=end

