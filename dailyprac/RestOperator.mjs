let info = {
  name: "nirakar",
  class: "Bachelor",
  address: "Dhankuta",
};
console.log(info.name);
let fun1 = (a, b, ...c) => {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
};
fun1(1, 2, 3, 4, 5, 6);
