/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

function LenFinder(list){
    let len = 0
      while(list){
            len++
            list = list.next
         }
    return len 
}



function getIntersectionNode(headA, headB) {

        let lenA = LenFinder(headA)
        let lenB = LenFinder(headB)

        let diff = Math.abs(lenA - lenB)

        let tempA = headA
        let tempB = headB

        if(lenA > lenB){
            while(diff-- > 0){
                tempA = tempA.next
            }
        }else{
            while(diff-- > 0){
                tempB = tempB.next
            }
        }

        while(tempA !== tempB){
            tempA = tempA.next
            tempB = tempB.next
            if(tempA === null || tempB === null){
                return null 
            }
        }
        return tempA;
};