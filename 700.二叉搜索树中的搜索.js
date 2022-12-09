/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    /**
     * 递归，时间复杂度O(N)，空间复杂度O(N)
     */
    // if (!root) return null
    // if (root.val === val) return root
    // return searchBST(root.val > val ? root.left : root.right, val)
    /**
     * 迭代，时间复杂度O(N)，空间复杂度O(1)
     */
    while (root) {
        if (root.val === val) return root
        root = root.val > val ? root.left : root.right
    }
    return null
};
// @lc code=end

