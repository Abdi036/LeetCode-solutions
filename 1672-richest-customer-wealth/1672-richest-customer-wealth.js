/**
 * @param {number[][]} accounts
 * @return {number}
 */
function maximumWealth(accounts) {
    let maxAccount = 0;
    let sum = 0;
    for(let i = 0; i < accounts.length; i++){
        sum = accounts[i].reduce((sum,acc)=>sum+acc,0) 
        if(sum > maxAccount){
            maxAccount = sum;
        }
    }
  return (maxAccount)
};