class Solution {
    public int minOperations(String s) {
        
        int count = 0;
        for(int i = 0; i < s.length(); i++){
             if (s.charAt(i) != Character.forDigit(i % 2, 10)) count++;
        }
        return Math.min(count,s.length() - count);
}
};