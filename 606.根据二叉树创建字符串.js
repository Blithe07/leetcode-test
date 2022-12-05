/*
 * @lc app=leetcode.cn id=606 lang=javascript
 *
 * [606] 根据二叉树创建字符串
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
 * @return {string}
 */
var tree2str = function (root) {
    /** 
     * 递归1
     */
    // let result = []
    // const dfs = (root, result, isLeft = false) => {
    //     if (!root) return isLeft
    //     result.push('(')
    //     result.push(root.val)
    //     const leftNull = dfs(root.left, result, true)
    //     if (leftNull && root.right) {
    //         result.push('(');
    //         result.push(')')
    //     }
    //     dfs(root.right, result)
    //     result.push(')')
    // }
    // dfs(root, result)
    // return result.slice(1, -1).join('')
    /**
     * 递归2
     */
    // if (!root) return ''
    // if (!root.left && !root.right) return root.val + ""
    // if (!root.right) return root.val + '(' + tree2str(root.left) + ')'
    // return root.val + '(' + tree2str(root.left) + ')(' + tree2str(root.right) + ')';
    /**
     * 迭代
     */
    let ans = ''
    const set = new Set()
    const stack = [root]
    while (stack.length) {
        const node = stack[stack.length - 1]
        if (set.has(node)) {
            // 第二次回到该节点，子节点遍历结束
            if (node !== root) {
                ans += ')';
            }
            stack.pop()
        } else {
            set.add(node)
            if (node !== root) {
                ans += '('
            }
            ans += '' + node.val
            if (node.right && !node.left) {
                ans += '()'
            }
            if (node.right) {
                stack.push(node.right)
            }
            if (node.left) {
                stack.push(node.left)
            }
        }
    }
    return ans
};
// @lc code=end

