class Solution {
    public int buyChoco(int[] prices, int money) {
        Arrays.sort(prices);
        int acc = prices[0] + prices[1];
        return money >= acc ? money - acc : money;
    }
}