function birthdayCakeCandles(candles) {
  // Write your code here
  let heighest = Math.max(...candles);
  return candles.filter((candles) => candles === heighest).length;
}

birthdayCakeCandles([3, 2, 1, 3]);
