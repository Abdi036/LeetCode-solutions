class Solution {
    public int maximumGap(int[] nums) {
        if(nums.length < 2) return 0;
        Arrays.sort(nums);
        int gap = 0;
        
        for(int i = 0; i < nums.length - 1; i++){
            int curgap = nums[i + 1] - nums[i];
            gap = Math.max(gap, curgap);
        }
        return gap;
    }
}

