/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
function sortPeople(names, heights) {
   const result = []
   for(let i = 0; i < names.length; i++){
        const max = Math.max(...heights)
        const index = heights.indexOf(max)
        result.push(names[index])
        heights[index] = 0
   }
   return result;
};