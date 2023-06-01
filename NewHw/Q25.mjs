let products = [
  {
    id: 1,
    title: "Product 1",
    category: "electronics",
    price: 5000,
    description: "This is description and Product 1",
    discount: {
      type: "other",
    },
  },
  {
    id: 2,
    title: "Product 2",
    category: "cloths",
    price: 2000,
    description: "This is description and Product 2",
    discount: {
      type: "other",
    },
  },
  {
    id: 3,
    title: "Product 3",
    category: "electronics",
    price: 3000,
    description: "This is description and Product 3",
    discount: {
      type: "other",
    },
  },
];
// 1. find the array of id ie  output must be [1,2,3]
// let ids = products.map((v, i) => {
//   let ide = v.id;
//   return ide;
// });
// console.log(ids);

// 2. find the array of title ie output must be ["Product 1", "Product 2", "Product 3"]
// let pros = products.map((v, i) => {
//   let pross = v.title;
//   return pross;
// });
// console.log(pros);

// 3. find the array of category
// let cat = products.map((v, i) => {
//   let cate = v.category;
//   return cate;
// });
// console.log(cat);

// 4. find the array of type
// let typ = products.map((v, i) => {
//   let typ1 = v.discount.type;
//   return typ1;
// });
// console.log(typ);

// 5. find the array of price where each price is multiplied by 3
// let price = products.map((v, i) => {
//   let pri = v.price * 3;
//   return pri;
// });
// console.log(price);

// 6. find those array of  title whose price is >= 3000
// let filterop = products.filter((v, i) => {
//   if (v.price >= 3000) {
//     return true;
//   } else {
//     return false;
//   }
// });
// let mapop = filterop.map((v, i) => {
//   return v.title;
// });
// console.log(mapop);

// find those array of  title whose price is does equal to 5000
let filterop = products.filter((v, i) => {
  if (v.price !== 5000) {
    return true;
  } else {
    return false;
  }
});
let mapop = filterop.map((v, i) => {
  return v.title;
});
console.log(mapop);
