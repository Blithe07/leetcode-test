/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    /**
     * 逐位颠倒，时间O(N)
     */
    // let result = 0
    // for (let i = 0; i < 32 && n > 0; i++) {
    //     // n & 1 得到最右侧数，result最左侧进行赋值
    //     result |= (n & 1) << (31 - i)
    //     // 原树向右移一位，相当于除以2向下取整
    //     n >>>= 1
    // }
    // // 确保得到无符号整数
    // return result >>> 0
    /**
     * 分治，时间O(1)
     */
    const M1 = 0x55555555; // 01010101010101010101010101010101
    const M2 = 0x33333333; // 00110011001100110011001100110011
    const M4 = 0x0f0f0f0f; // 00001111000011110000111100001111
    const M8 = 0x00ff00ff; // 00000000111111110000000011111111
    // 奇偶位互换
    n = n >>> 1 & M1 | (n & M1) << 1;
    n = n >>> 2 & M2 | (n & M2) << 2;
    n = n >>> 4 & M4 | (n & M4) << 4;
    n = n >>> 8 & M8 | (n & M8) << 8;
    return (n >>> 16 | n << 16) >>> 0;
};
// @lc code=end