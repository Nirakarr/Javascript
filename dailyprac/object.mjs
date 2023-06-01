// diffrent bet. arrow func. and normal func.

let obj1 = {
  firstName: "Nirakar",
  lastName: "Adhikari",
  mergeFirstLastName: function () {
    let fullName = `${this.firstName} ${this.lastName}`;
    console.log(fullName);
  },
};
obj1.mergeFirstLastName();
let keys = Object.keys(obj1);
let values = Object.values(obj1);
console.log(keys);
console.log(values);

console.log(values[2]());
