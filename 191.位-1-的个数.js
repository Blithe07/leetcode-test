/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    /**
     * 循环获取最左侧数字
     */
    // let ret = 0;
    // for (let i = 0; i < 32; i++) {
    //     if ((n & (1 << i)) !== 0) {
    //         ret++;
    //     }
    // }
    // return ret;
    /**
     * 规律：n & (n−1)，其运算结果恰为把 nn 的二进制位中的最低位的 11 变为 00 之后的结果
     */
    let ret = 0
    while (n) {
        n &= n - 1
        ret++
    }
    return ret
};
// @lc code=end

