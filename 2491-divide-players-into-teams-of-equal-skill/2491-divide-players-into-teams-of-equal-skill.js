/**
 * @param {number[]} skill
 * @return {number}
 */
function dividePlayers(skill) {
    if(skill.length === 2){
        return skill[0] * skill[1]
    }

    skill.sort((a,b)=> a - b)

    let left = 0
    let right = skill.length - 1
    const mainSum = skill[0] + skill[skill.length - 1]
    let res = 0;

    // skill = [2,3,3,4]
    for(let i = 0; i < skill.length; i++){
       if(left  > right){
            break;
        }else if(skill[left] + skill[right] === mainSum){
            let product = skill[left] * skill[right]
            left++
            right--
            res += product
        }
        else return -1
    }
    return res
};