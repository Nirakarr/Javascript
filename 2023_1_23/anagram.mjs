export let ana = (str1, str2) => {
  if (str1.length != str2.length) {
    return false;
  } else {
    let u1 = str1.toLowerCase();
    let s1 = u1.split("");
    let s2 = s1.sort();
    let s3 = s2.join("");
    let u2 = str2.toLowerCase();
    let st1 = u2.split("");
    let st2 = st1.sort();
    let st3 = st2.join("");
    if (s3 === st3) {
      return true;
    } else {
      return false;
    }
  }
};
