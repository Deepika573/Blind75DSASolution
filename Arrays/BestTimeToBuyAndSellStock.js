// Brute force solution for best time to buy and sell stock
function BestTimeToBuyAndSellStock(prices) {
  let boughtStock = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < boughtStock) {
      boughtStock = prices[i];
    } else {
      if (prices[i] - boughtStock > profit) {
        profit = prices[i] - boughtStock;
      }
    }
  }
  return profit;
}
// Time complexity: O(n)
// Space complexity: O(1)

console.log(BestTimeToBuyAndSellStock([7, 6, 4, 3, 1]));
