export let pal = (str13) => {
  let arr = str13.split("");
  let rev = arr.reverse();
  let s1 = rev.join("");
  if (str13 === s1) {
    return "Palindrome";
  } else {
    return "Not a Palindrome";
  }
};
