let numbers = [1, 2, 3, 4];

let sum = numbers.reduce((previous, current) => {
  let sum1 = previous + current;
  return sum1;
}, 0);

console.log(sum);
