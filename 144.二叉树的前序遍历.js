/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function (root) {
    /**
     * 递归，内部维护栈
     */
    // const result = []
    // const preorder = (root) => {
    //     if (!root) return
    //     result.push(root.val)
    //     preorder(root.left)
    //     preorder(root.right)
    // }
    // preorder(root)
    // return result
    /**
     * 迭代，手动维护栈
     */
    // const result = []
    // const stack = []
    // while (root || stack.length) {
    //     while (root) {
    //         stack.push(root)
    //         result.push(root.val)
    //         root = root.left
    //     }
    //     root = stack.pop()
    //     root = root.right
    // }
    // return result\
    /**
     * morris遍历
     *   1.只会遇到一次的节点，入栈
     *   2.能遇到两次的节点，第一次入栈
     */
    if (!root) return []
    const result = []
    let cur = root, mostRight
    while (cur) {
        mostRight = cur.left
        if (mostRight) {
            while (mostRight.right && mostRight.right !== cur) {
                mostRight = mostRight.right
            }
            if (!mostRight.right) {
                // 对应2.
                result.push(cur.val)
                mostRight.right = cur
                cur = cur.left
                continue
            } else {
                mostRight = null
            }
        } else {
            // 无左树，对应1.
            result.push(cur.val)
        }
        cur = cur.right
    }
    return result
};
// @lc code=end

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}