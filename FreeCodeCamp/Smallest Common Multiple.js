function smallestCommons(arr) {
  let newArr = arr.sort((a, b) => a - b);

  let loopCount = 1;
  for (let i = 1; i <= newArr[1]; i++) {
    loopCount *= i;
  }

  let canDevice = false;
  for (let i = newArr[1]; i <= loopCount; i++) {
    for (let j = newArr[0]; j <= newArr[1]; j++) {
      // console.log(i, " ", j);
      if (i % j !== 0) {
        canDevice = false;
        // console.log("exit");
        break;
      } else {
        // console.log("can divice");
        canDevice = true;
      }
      if (j === newArr[1] && canDevice === true) {
        console.log("this is final", i);
        return i;
      }
    }
    if (canDevice == true) {
      console.log(i);
      return i;
    }
  }
  // return arr;
}

smallestCommons([5, 1]);
