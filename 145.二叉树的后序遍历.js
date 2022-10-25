/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
    /**
     * 内部维护栈
     */
    // const result = []
    // const postorder = (root) => {
    //     if (!root) return
    //     postorder(root.left)
    //     postorder(root.right)
    //     result.push(root.val)
    // }
    // postorder(root)
    // return result
    /**
     * 显示维护栈
     */
    // const result = []
    // const stack = []
    // let prev
    // while (root || stack.length) {
    //     while (root) {
    //         stack.push(root)
    //         root = root.left
    //     }
    //     root = stack.pop()
    //     if (!root.right || root.right === prev) {
    //         // 不存在右节点或者该节点的右节点未被访问过
    //         result.push(root.val)
    //         prev = root
    //         // 避免压重复的节点，导致死循环。并且可以跳出最外层循环
    //         root = null
    //     } else {
    //         // 存在右节点，当前节点重新入栈，指针向右移动
    //         stack.push(root)
    //         root = root.right
    //     }
    // }
    // return result
    /**
     * morris遍历
     *  1.能遇到两次的节点，第二次遇到时，打印其节点左子树逆序右边界
     *  2.单独逆序打印整棵树右边界
     */
    const pushVal = (node) => {
        const tail = reverseEdge(node)
        let cur = tail
        while (cur) {
            result.push(cur.val)
            cur = cur.right
        }
        reverseEdge(tail)
    }
    const reverseEdge = (from) => {
        let next, prev
        while (from) {
            next = from.right
            from.right = prev
            prev = from
            from = next
        }
        return prev
    }
    let cur = root, mostRight
    const result = []
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
                mostRight.right = null
                // 对应1.
                pushVal(cur.left)
            }
        }
        cur = cur.right
    }
    // 对应2.
    pushVal(root)
    return result
};
// @lc code=end

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}