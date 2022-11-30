/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    const len = s.length
    const arr = Array.from(s)
    const reverse = (arr, left, right){
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }
    }
    for (let i = 0; i < len; i += 2 * k) {
        reverse(arr, i, Math.min(i + k, len) - 1)
    }
    return arr.join('')
};
// @lc code=end

