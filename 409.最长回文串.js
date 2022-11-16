/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    /**
     * 时间复杂度：O(s)，空间复杂度O(s)
     * 思路：
     *      1.遍历字符串，收集每个字符出现次数
     *      2.偶数个数的字符数量直接加到最后结果中
     *      3.奇数个数的字符
     *          1.只存在一个奇数个数的字符直接加到最后结果中
     *          2.若存在多个奇数个数的字符，每个数字除以2向下取整加到结果中，最后加1
     */
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if (map.has(element)) {
            const num = map.get(element)
            map.set(element, num + 1)
        } else {
            map.set(element, 1)
        }
    }
    let result = 0
    let addOne = false
    for (const [ch, num] of map) {
        result += num
        if (num % 2 === 0) {
            result += num
        } else {
            addOne = true
            result += (num - 1)
        }
    }
    return addOne ? result + 1 : result
};
// @lc code=end

longestPalindrome("abccccdd")