/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    // n & (n - 1) 保证当前数只有一个1
    // 位运算中,4的幂都出现在奇数次位 eg:1 100 10000 
    return n > 0 && (n & (n - 1)) === 0 && (n & 0xaaaaaaaa) === 0
    // 4的幂除以3等于1
    // return n > 0 && (n & (n - 1)) === 0 && (n % 3 === 1)
};
// @lc code=end
