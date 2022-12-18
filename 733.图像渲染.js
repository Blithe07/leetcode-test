/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    const curColor = image[sr][sc]
    if (curColor === color) return image
    const dx = [1, 0, 0, -1], dy = [0, 1, -1, 0]
    const x = image.length
    const y = image[0].length
    const queue = [[sr, sc]]
    image[sr][sc] = color
    while (queue.length) {
        const [m, n] = queue.pop()
        for (let i = 0; i < 4; i++) {
            const mx = dx[i] + m, my = dy[i] + n
            if (mx >= 0 && mx < x && my >= 0 && my < y && image[mx][my] === curColor) {
                queue.push([mx, my])
                image[mx][my] = color
            }
        }
    }
    return image
};
// @lc code=end

