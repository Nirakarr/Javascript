export let largest = (arr) => {
  let arr1 = arr.sort();
  let rev = arr1.reverse();
  let arr2 = rev[2];
  return `Third largest number of array is ${arr2}`;
};
