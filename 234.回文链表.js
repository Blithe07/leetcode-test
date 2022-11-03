/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    /**
     * 时间O(N),空间O(N)
     */
    // const vals = []
    // while (head) {
    //     vals.push(head.value)
    //     head = head.next
    // }
    // for (let i = 0, j = vals.length - 1; i < j; i++, j--) {
    //     if (vals[i] !== vals[j]) {
    //         return false
    //     }
    // }
    // return true
    /**
     * 时间O(N),空间O(N/2)
     */
    // if (!head || !head.next) return true
    // // 少比较一次
    // let right = head.next
    // let cur = head
    // // 快指针走两步，慢指针走一步
    // while (cur.next && cur.next.next) {
    //     right = right.next
    //     cur = cur.next.next
    // }
    // const stack = new Array()
    // // 到中点后，数据压入栈中
    // while (right) {
    //     stack.push(right.value)
    //     right = right.next
    // }
    // while (stack.length) {
    //     // 弹出比较，不一致则不是回文
    //     if (head.value !== stack.pop()) return false
    //     // 一致继续比较
    //     else head = head.next
    // }
    // return true
    /**
     * 时间O(N),空间O(1)
     */
    let slow = head, fast = head
    // slow走到中点
    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    fast = slow.next
    slow.next = null
    let tmp = null
    // 反转后半截
    while (fast) {
        tmp = fast.next
        fast.next = slow
        slow = fast
        fast = tmp
    }
    tmp = slow
    fast = head
    let result = true
    // 比较是否一致
    while (slow && fast) {
        if (slow.val !== fast.val) {
            result = false
            break
        }
        slow = slow.next
        fast = fast.next
    }
    slow = tmp.next
    tmp.next = null
    // 反转回去
    while (slow) {
        fast = slow.next
        slow.next = tmp
        tmp = slow
        slow = fast
    }
    return result
};
// @lc code=end

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}