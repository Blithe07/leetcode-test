/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    const row = grid.length, col = grid[0].length
    let ret = 0
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j]) {
                let count = 0
                for (let k = 0; k < 4; k++) {
                    const tx = i + dx[k];
                    const ty = j + dy[k];
                    if (tx < 0 || tx >= row || ty < 0 || ty >= col || !grid[tx][ty]) {
                        count += 1;
                    }
                }
                ret += count
            }
        }
    }
    return ret
};
// @lc code=end

