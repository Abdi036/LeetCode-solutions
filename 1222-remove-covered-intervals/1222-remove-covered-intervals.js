/**
 * @param {number[][]} intervals
 * @return {number}
 */
function removeCoveredIntervals(intervals) {
   intervals.sort((a,b) => a[0] - b[0] || b[1] - a[1])

   let count = 0
   let maxEnd = 0

   for(let i = 0; i < intervals.length; i++){
    const [start,end] = intervals[i]
     if(end > maxEnd){
        count++
        maxEnd = end
     }
   }
   return count
};