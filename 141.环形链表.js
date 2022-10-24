/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    /**
     * 快指针走两步，慢指针走一步
     *  1.慢指针走完没相遇，返回false
     *  2.相遇返回true
     */
    if (!head || !head.next) return false
    let slow = head, fast = head.next
    while (slow !== fast) {
        if (!fast || !fast.next) return false
        slow = slow.next
        fast = fast.next.next
    }
    return true
};
// @lc code=end

function ListNode(val) {
    this.val = val;
    this.next = null;
}