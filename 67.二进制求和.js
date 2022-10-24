/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let ans = "";
    // 是否需要进位,1(需要) 0(不需要)
    let ca = 0;
    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
        let sum = ca;
        sum += i >= 0 ? +a[i] : 0;
        sum += j >= 0 ? +b[j] : 0;
        ans += sum % 2;
        ca = sum >> 1
    }
    ans += ca == 1 ? ca : "";
    // 得到的ans是反向的字符串
    return ans.split('').reverse().join('');
};
// @lc code=end
