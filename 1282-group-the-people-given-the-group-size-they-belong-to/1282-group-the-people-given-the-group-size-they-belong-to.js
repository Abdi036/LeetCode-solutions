/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
function groupThePeople(groupSizes) {
  const res = [];
  const newGroup = new Map();

  for(let i = 0; i < groupSizes.length; i++){
    const size = groupSizes[i]
    if(!newGroup.has(size)){
        newGroup.set(size,[]);
    }
     newGroup.get(size).push(i)

    if(newGroup.get(size).length === size){
        res.push(newGroup.get(size))
        newGroup.set(size,[])
    }
  }

return res
};