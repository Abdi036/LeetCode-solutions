class Solution {
    public boolean halvesAreAlike(String s) {
        int a = s.length() / 2;
        int b = s.length() - a;
        int counta = 0;
        int countb = 0;

        for (int i = 0; i < a; i++) {
            char ch = Character.toLowerCase(s.charAt(i));
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                counta++;
            }
        }
        for (int i = a; i < s.length(); i++) {
            char ch = Character.toLowerCase(s.charAt(i));
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                countb++;
            }
        }
        return counta == countb;
    }
}