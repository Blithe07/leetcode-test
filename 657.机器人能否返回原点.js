/*
 * @lc app=leetcode.cn id=657 lang=javascript
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let x = 0, y = 0
    for (let i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case 'U':
                y += 1
                break
            case 'D':
                y -= 1
                break
            case 'L':
                x -= 2
                break
            case 'R':
                x += 2
                break
        }
    }
    return x === 0 && y === 0
};
// @lc code=end

