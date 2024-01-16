class Solution {
    public int firstMissingPositive(int[] nums) {
         int missingNumber = 1;
         Arrays.sort(nums);
         Set<Integer> numSet = new HashSet<>();

        for(int number : nums){
            if(number > 0){
                numSet.add(number);
                 while(numSet.contains(missingNumber))
                 missingNumber++;
            }
        }
        return missingNumber;
    }
};