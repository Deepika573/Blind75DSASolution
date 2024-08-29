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

// Bit more fast solution for best time to buy and sell stock
function BestTimeToBuyAndSellStock2(prices) {
  let boughtStock = prices[0];
  let profits = { 0: 0 };
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < boughtStock) {
      boughtStock = prices[i];
    } else {
      profits[prices[i] - boughtStock] = prices[i] - boughtStock;
    }
  }
  return Math.max(...Object.values(profits));
}
// Time compexity: O(n)
// Space complexity: O(n)

console.log(BestTimeToBuyAndSellStock([7, 6, 4, 3, 1]));
console.log(BestTimeToBuyAndSellStock2([7, 6, 4, 3, 1]));
console.log(BestTimeToBuyAndSellStock([7, 1, 5, 3, 6, 4]));
console.log(BestTimeToBuyAndSellStock2([7, 1, 5, 3, 6, 4]));
