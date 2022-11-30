/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
    return getTreeInfo(root).maxHeight - 1
};
/**
 * 
 * @param {*} root
 * @return {TreeInfo} 
 */
const getTreeInfo = (root) => {
    if (!root) {
        return new TreeInfo(0, 0)
    }
    const left = getTreeInfo(root.left)
    const right = getTreeInfo(root.right)
    const height = Math.max(left.height, right.height) + 1
    const maxHeight = Math.max(left.maxHeight, right.maxHeight, left.height + right.height + 1)
    return new TreeInfo(height, maxHeight)
}
class TreeInfo {
    constructor(height, maxHeight) {
        this.height = height
        this.maxHeight = maxHeight
    }
}
// @lc code=end

