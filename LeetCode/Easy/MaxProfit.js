// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

let prices = [7, 1, 3, 2, 5]

var maxProfit = function(prices) {
  let profit = 0;
  for (let i = 0; i < prices.length-1; i++) {
    if (prices[i] < prices [i+1]) {
      profit += prices[i+1] - prices[i]
    }
  }
  return profit;
}

maxProfit(prices)
