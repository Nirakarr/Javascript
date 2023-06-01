const array1 = [1, 2, 3];
const newarray = [...array1, 4]; //used to split up array elements OR obj Properties
console.log(newarray);

const obj = {
  name: "nirakar",
};
const newobj = {
  ...obj, // spliting obj properties
  age: 22,
};
console.log(newobj);
