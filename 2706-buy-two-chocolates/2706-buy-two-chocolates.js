/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
function buyChoco(prices, money) {
    prices.sort((a,b)=> a - b);
    let acc = prices[0] + prices[1];
    return money >= acc ? money - acc : money;
};

 
        


