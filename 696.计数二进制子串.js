/*
 * @lc app=leetcode.cn id=696 lang=javascript
 *
 * [696] 计数二进制子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
    /**
     * 时间复杂度O(N)，空间复杂度O(N)
     */
    // const counts = [], len = s.length
    // let i = 0
    // while (i < len) {
    //     let count = 0
    //     const cur = s.charAt(i)
    //     while (i < len && s.charAt(i) === cur) {
    //         i++
    //         count++
    //     }
    //     counts.push(count)
    // }
    // let result = 0
    // for (let i = 1; i < counts.length; i++) {
    //     result += Math.min(counts[i], counts[i - 1])
    // }
    // return result
    /**
     * 时间复杂度O(N)，空间复杂度O(1)
     */
    const len = s.length
    let i = 0, last = 0, result = 0
    while (i < len) {
        let count = 0
        const cur = s.charAt(i)
        while (i < len && s.charAt(i) === cur) {
            i++
            count++
        }
        result += Math.min(count, last)
        last = count
    }
    return result
};
// @lc code=end

