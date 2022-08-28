function steamrollArray(...arr) {
  let a = arr.join("").split(",");
  a = a.filter((item) => {
    return item !== "";
  });

  let b = a.map((item) => {
    if (item == "[object Object]") {
      return {};
    } else if (item == "") {
      console.log("easy");
      return;
    } else {
      return Number(item) || item;
    }
  });
  console.log(a);
  console.log(b);
  return b;
}

steamrollArray([1, [], [3, [[4]]]]);
