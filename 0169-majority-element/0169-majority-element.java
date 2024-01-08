class Solution {
    public int majorityElement(int[] nums) {
        Arrays.sort(nums);
        return nums[Math.round(nums.length / 2)];
    }
}