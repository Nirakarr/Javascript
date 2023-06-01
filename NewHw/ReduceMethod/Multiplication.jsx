let arrMul = [1, 2, 3, 4];
let store = arrMul.reduce((previous, current) => {
  let mul = previous * current;
  return mul;
}, 1);
console.log(store);
