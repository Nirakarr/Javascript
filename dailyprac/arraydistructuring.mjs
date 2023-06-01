// let list = ["a", "b", "c"];
// let [n1, n2, n3, n4 = 4] = ["a", "b", "c"];
// console.log(n1);
// console.log(n2);
// console.log(n3);
// console.log(n4);

// object distructing
// in array order matters while in object order doesn't matters
// let obj = {
//   name: "ram",
//   age: 21,
//   isMarried: false,
// };
let {
  name = "nirakar",
  age = 21,
  isMarried,
} = { name: "Nirakar Adhikari", isMarried: false };
console.log(name);
console.log(age);
console.log(isMarried);
