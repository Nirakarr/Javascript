// number,strings and boolean are primitive data types as they copy or store the value of variable
// array and objects are referencial data types

//primitive data types ex..
let a = 23;
let b = a; // b copies the value of a
console.log(b);

// referential data types ex...
let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1; // arr2 and arr1 will point the same memory locatio and get value from there(referential)
console.log(arr2);

let obj1 = {
  name: "product1",
  type: "snacks",
};
console.log(obj1);
let obj2 = obj1;
console.log(obj2);
obj2.name = "product2";
let obj3 = { ...obj2 }; // to copy value from variable of array and obj data types
obj1.name = "Product3";
console.log(obj3);
