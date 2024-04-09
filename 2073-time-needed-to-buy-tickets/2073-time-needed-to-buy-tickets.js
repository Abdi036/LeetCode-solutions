/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
function timeRequiredToBuy(tickets, k) {
   let pos = 0;
   let  count = 0;
  while(tickets[k] !== 0){
    if(pos < tickets.length){
        if(tickets[pos] !== 0){
            tickets[pos]--;
            pos++;
            count++;
        }else{
            pos++
        }
    }
    else{
        pos = 0;
    }
  }
  return count;
};