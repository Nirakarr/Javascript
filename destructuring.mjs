// let arr = ["Hello", "World"];

// // destructuring assignment
// let [first, second] = arr;

// console.log(first); // Hello
// console.log(second); // World

// var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

// // destructuring assignment
// var [color1, color2, color3] = colors;

// console.log(color1); // Violet
// console.log(color2); // Indigo
// console.log(color3); // Blue

// let info = ["name", "age", "address"];
// let [a, b, c] = info;
// console.log(a, b, c);

// Object Destructuring
// let obj = {
//   name: "Nirakar",
//   age: 21,
//   address: "Dhankuta",
// };
// let { name, age, address } = obj;
// console.log(name, age, address);

// obj destructuring and default values
// const { x = 100, y = 200 } = { x: 500 };

// console.log(x); // 500
// console.log(y); // 200

const obj={name:"nirakar",age:21,address:"Dhankuta"}
obj.name="hari"
console.log(obj.name)
const{name,age,address}=obj
console.log(name,age,address);
