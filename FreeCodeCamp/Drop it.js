function dropElements(arr, func) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (func(arr[i])) newArr = arr.splice(i, arr.length);
  }
  console.log(newArr);
  return newArr;
}

dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});
