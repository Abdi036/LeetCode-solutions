class Solution {
    public int numDecodings(String s) {
        if(s.charAt(0) == '0') return 0;

        int[] arr = new int[s.length() + 1];
        arr[0] = arr[1] = 1;
        for(int i = 2; i <= s.length(); i++){
             int num1 = Integer.parseInt(s.substring(i - 1, i));
            int num2 = Integer.parseInt(s.substring(i - 2, i));
            if(num1 >= 1 && num1 <= 9){
                arr[i] += arr[i - 1];
            }
            if(num2 >= 10 && num2 <= 26){
                arr[i] += arr[i - 2];
            }
        }
        return arr[s.length()];
    }
}