function auth(age) {
  if (age >= 18) {
    let a1 = "You are authorized to watch movies";
    return a1;
  } else {
    let a1 = "You are not authorized to watch movies";
    return a1;
  }
}
let op = auth(18);
console.log(op);
