/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function (root) {
    /**
     * 递归，内部维护栈
     const result = []
     const inorder = (root) => {
         if (!root) return
         inorder(root.left)
         result.push(root.val)
         inorder(root.right)
     }
     inorder(root)
     return result
     */
    /**
     * 迭代，手动维护栈
     const res = [];
     const stk = [];
     while (root || stk.length) {
         while (root) {
             stk.push(root);
             root = root.left;
         }
         root = stk.pop();
         res.push(root.val);
         root = root.right;
     }
     return res;
     */
    /**
     * morris遍历
     *  1.只会遇到一次的节点，入栈
     *  2.能遇到两次的节点，第二次入栈
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
                mostRight.right = cur
                cur = cur.left
                continue
            } else {
                mostRight = null
            }
        }
        // 没有左树或者第二次遇到同一节点(对应1、2)
        result.push(cur.val);
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