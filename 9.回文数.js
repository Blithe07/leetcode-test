/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    /**
     * 字符串角度
     */
    // const xStr = x + ''
    // let newStr = ''
    // for (let i = xStr.length - 1; i >= 0; i--) {
    //     newStr += xStr[i]
    // }
    // return newStr === xStr
    /** 
     * 数学角度
     */
    if (x < 0) return false;
    let cur = 0;
    let num = x;
    while (num != 0) {
        cur = cur * 10 + num % 10;
        num = parseInt(num / 10);
    }
    return cur == x;
};

// @lc code=end