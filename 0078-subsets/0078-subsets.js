/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
    const res = []
    const subset = []

            function dfs(index){
                if(index >= nums.length){
                    res.push(subset.slice())
                    return
                }

                subset.push(nums[index])
                dfs(index + 1)

                subset.pop()
                dfs(index + 1)
            }
            dfs(0)
        return res    
};