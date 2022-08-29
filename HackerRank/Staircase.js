function staircase(n) {
  // Write your code here
  let toPrint = "";
  for (let i = 1; i <= n; i++) {
    toPrint = "";
    for (let j = n; j >= 1; j--) {
      if (j <= i) {
        toPrint += "#";
      } else {
        toPrint += " ";
      }
    }
    console.log(toPrint);
  }
}

staircase(6);
