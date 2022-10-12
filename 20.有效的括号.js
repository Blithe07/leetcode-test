/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const n = s.length;
    if (n % 2 === 1) {
        // 奇数项
        return false;
    }
    const pairs = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);
    const stk = [];
    for (let ch of s) {
        if (pairs.has(ch)) {
            // 找不到直接false
            if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
                return false;
            }
            // 找到了弹出
            stk.pop();
        }
        else {
            // 入栈
            stk.push(ch);
        }
    };
    return !stk.length;
};
// @lc code=end
