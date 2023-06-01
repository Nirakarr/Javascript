// Q16write the behaviour of primitive and non primitive data (answer must be from our class topic)
//  (explain passby value and passby refrence  concept clearly)
// (explain why [1,2,3] is not equal to [1,2,3]  but 1 is equal to 1 (edited)

// Ans: Primitive data types includes number,string,boolean and undefined.
// primitive data types are whose from which we can construct all other data types.
// Non-primitive data types includes array and object.
// Those data types which are derived or constructed using primitive data types are Non-primitive data types.

// In pass by value,value is passed from one other so that ovalue passed variable can work independently
// for eg.
let x = 5;
let y = x; // passed by value as value of x is passed to y so that y can work independently with the value of x
// In primitive data types both a,b works independently, pass by value is only done in case of primitive datatype

// In pass by reference, reference is passed so that one or more variable uses the same memory location.
// For eg.
let obj = {
  name: "nirakar",
  pass: "adhikari",
};
let obj1 = obj;
obj.pass = "adhi";
console.log(obj);
console.log(obj1);

// here we can see that both the objects are sharing same memomry location i.e. obj and obj1 so here the reference
// is passed. Pass by reference is done in array and objects that are non-primitive data types

// Lets see another eg. using array,
let a1 = [1, 2, 3];
let a2 = a1; // here now both a2 and a1 will dependently share the same memory space which has [1,2,3] in an array
console.log(a1);
console.log(a2);
// both arrays have [1,2,3] by now so a1 is not equal to a2. This includes pass by reference.

// Q18 what is undefined (edited)
// Undefined can be defined as a variable that has not been assigned a value. It is also a primitive data type.

// Q19 difference between let and const (edited)
// Ans:- As per taught, In let data type identifier can be reassigned where in const identifier cannot be
// reassigned once assigned. for eg.
let a = 12; //num
console.log(a);
a = "string"; // reassgined
console.log(a);

const b = 12;
console.log(b);
b = "string"; // throws error cannot be reassigned
console.log(b);

// Q20 best way to name variable and rule of variable or function naming
// They are:
// variable or function naming should not start which number and special letters except _and$.
// variable or function naming should must be written in camel case convention for best practise
// variable or function naming should must carify its use for best practise
// keywords cannot be used as variable or funtion name
