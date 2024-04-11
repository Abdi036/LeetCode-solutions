/**
 * @param {string[]} operations
 * @return {number}
 */
function finalValueAfterOperations(operations) {
  return operations.reduce((acc,cur)=>cur[1] === "+" ? ++acc : --acc,0)
};