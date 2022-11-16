/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    // 深度优先
    const isLeaf = (root) => {
        return !root.left && !root.right
    }
    // const dfs = (root) => {
    //     let result = 0
    //     if (root.left) {
    //         result += isLeaf(root.left) ? root.left.val : dfs(root.left)
    //     }
    //     if (root.right && !isLeaf(root.right)) {
    //         result += dfs(root.right)
    //     }
    //     return result
    // }
    // return root ? dfs(root) : 0
    // 广度优先
    const queue = []
    queue.push(root)
    let result = 0
    while (queue.length) {
        const curNode = queue.pop()
        if (curNode.left) {
            if (isLeaf(curNode.left)) {
                result += curNode.left.val
            } else {
                queue.push(curNode.left)
            }
        }
        if (curNode.right) {
            if (!isLeaf(curNode.right)) {
                queue.push(curNode.right)
            }
        }
    }
    return result
};
// @lc code=end

