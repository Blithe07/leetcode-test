/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const getNext = (n) => {
        let result = 0
        while (n > 0) {
            const d = n % 10
            n = Math.floor(n / 10)
            result += d * d
        }
        return result
    }
    /** 哈希表 */
    // const set = new Set()
    // while (n !== 1 && !set.has(n)) {
    //     set.add(n)
    //     n = getNext(n)
    // }
    // return n === 1
    /** 快慢指针 */
    let slow = n
    let fast = getNext(n)
    while (fast !== 1 && fast !== slow) {
        slow = getNext(slow)
        fast = getNext(getNext(fast))
    }
    return fast === 1
};
// @lc code=end

