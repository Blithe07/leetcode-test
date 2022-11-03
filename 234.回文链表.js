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