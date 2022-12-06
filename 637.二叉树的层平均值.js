/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    /**
     * 深度优先搜索
     */
    // const counts = [], sums = [], averages = []
    // const dfs = (root, level, counts, sums) => {
    //     if (!root) return
    //     if (level < sums.length) {
    //         sums[level] += root.val
    //         counts[level] += 1
    //     } else {
    //         sums.push(+root.val)
    //         counts.push(1)
    //     }
    //     dfs(root.left, level + 1, counts, sums)
    //     dfs(root.right, level + 1, counts, sums)
    // }
    // dfs(root, 0, counts, sums)
    // const len = sums.length
    // for (let i = 0; i < len; i++) {
    //     averages.push(sums[i] / counts[i])
    // }
    // return averages
    /**
     * 广度优先搜索
     */
    const result = []
    const queue = [root]
    while (queue.length) {
        let sum = 0
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const node = queue.shift()
            sum += node.val
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        result.push(sum / len)
    }
    return result
};
// @lc code=end

