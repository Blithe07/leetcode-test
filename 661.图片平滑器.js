/*
 * @lc app=leetcode.cn id=661 lang=javascript
 *
 * [661] 图片平滑器
 */

// @lc code=start
/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
    const m = img.length, n = img[0].length;
    const result = Array.from(new Array(m), () => new Array(n))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let num = 0, sum = 0;
            for (let x = i - 1; x <= i + 1; x++) {
                for (let y = j - 1; y <= j + 1; y++) {
                    if (x >= 0 && x < m && y >= 0 && y < n) {
                        num++;
                        sum += img[x][y];
                    }
                }
            }
            result[i][j] = Math.floor(sum / num);
        }
    }
    return result
};
// @lc code=end

