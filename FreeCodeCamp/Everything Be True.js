function truthCheck(collection, pre) {
  for (let i = 0; i < collection.length; i++) {
    let preValue = collection[i][pre];

    console.log(" ----> ", collection[i][pre]);
    // console.log(Array.isArray(preValue), '    >> ');
    if (
      preValue === false ||
      preValue == "" ||
      preValue !== preValue ||
      preValue == undefined
    ) {
      if (Array.isArray(preValue)) {
        console.log("true");
        return true;
      }
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

truthCheck(
  [
    { name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] },
    { name: "Code Radio", users: [{ name: "Camperbot" }] },
    { name: "", users: [] },
  ],
  "users"
);
