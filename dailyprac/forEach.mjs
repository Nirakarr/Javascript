let ar1 = ["a", "b", "c", "d"];
ar1.forEach((v, i) => {
  if (v === "c") {
    ar1[i] = "e";
  }
});
console.log(ar1);
