/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    /**
     * 深度优先
     */
    // const result = []
    // const buildPath = (root, path) => {
    //     if (root) {
    //         path += root.val.toString()
    //         if (!root.left && !root.right) {
    //             result.push(path)
    //         } else {
    //             path += "->"
    //             buildPath(root.left, path)
    //             buildPath(root.right, path)
    //         }
    //     }
    // }
    // buildPath(root, '')
    // return result
    /**
     * 广度优先
     */
    const paths = []
    if (!root) return paths
    const node_queue = [root]
    const path_queue = [root.val.toString()]
    while (node_queue.length) {
        const node = node_queue.pop()
        const path = path_queue.pop()
        if (!node.left && !node.right) { paths.push(path) }
        else {
            if (node.left) {
                node_queue.push(node.left)
                path_queue.push(path + '->' + node.left.val.toString())
            }
            if (node.right) {
                node_queue.push(node.right)
                path_queue.push(path + '->' + node.right.val.toString())
            }
        }
    }
    return paths
};
// @lc code=end

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}