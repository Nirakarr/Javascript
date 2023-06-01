let {
  name,
  age = "greaterthan18", // default value
  isMarried,
} = {
  name: "nirakar adhikari",
  age: 18,
  isMarried: false,
};
console.log(name);
console.log(age);
console.log(isMarried);
