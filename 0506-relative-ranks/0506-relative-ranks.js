/**
 * @param {number[]} score
 * @return {string[]}
 */
function findRelativeRanks(score) {
   let rank = score.slice(0).sort((a,b)=> b - a)
   let maxRank = rank.slice(0)

   for(let i = 0; i < maxRank.length; i++){
      if(i === 0) maxRank[i] = "Gold Medal";
       else if(i === 1) maxRank[i] = "Silver Medal";
       else if(i === 2) maxRank[i] = "Bronze Medal";
       else maxRank[i] = i + 1 + ""
   }

   for(let i = 0; i < score.length; i++){
      for(let j = 0; j < rank.length; j++){
            if(score[i] === rank[j]){
                score[i] = maxRank[j] 
            }
      }
   }
return score    
};