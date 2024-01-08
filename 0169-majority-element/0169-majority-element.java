class Solution {
    public int majorityElement(int[] nums) {
        Arrays.sort(nums);
        int leng = Math.round(nums.length / 2);
        return nums[leng];
    }
}