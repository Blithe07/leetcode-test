/*
 * @lc app=leetcode.cn id=762 lang=javascript
 *
 * [762] 二进制表示中质数个计算置位
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
    const isPrime = (val) => {
        if (val < 2) return false
        for (let i = 2; i * i <= val; i++) {
            if (val % i === 0) {
                return false
            }
        }
        return true
    }
    const bitCount = (val) => {
        return val.toString(2).split('0').join('').length
    }
    let result = 0
    for (let i = left; i <= right; i++) {
        if (isPrime(bitCount(i))) {
            result++
        }
    }
    return result
};
// @lc code=end

