export let array01 = (a1) => {
  let arrr = a1.map((v, i) => {
    let news = v * 2;
    return news;
  });
  return arrr;
};
