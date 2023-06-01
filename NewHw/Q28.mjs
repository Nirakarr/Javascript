// Q28 make a function that takes two input one is array and another is string and  return true
// if the string lies in that array else return false eg fun(["admin","superAdmin"],"admin")
// must return true because admin lies in the given array eg fun(["admin","superAdmin"],"user")
// must return false because user doesnot lies then the given array
let two = (arr, str) => {
  if (arr.includes(str)) {
    return `return true because admin lies in the given array`;
  } else {
    return `must return false because user doesnot lies then the given array`;
  }
};
let inp = two([`admin`, `superAdmin`], `admin`);
console.log(inp);
