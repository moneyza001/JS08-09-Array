const sales = [
    { price: 1000, discount: 0.1 },
    { price: 500, discount: 0.05 },
    { price: 100 }
];
// const newArr = []; 
// for(let obj of sales) {
//     let price = obj.price;
//     let discount = obj.discount;
//     let netPrice = price;
//     if(discount) {
//         netPrice = price * (1 - discount);
//     }
//     const newObj = {netPrice : netPrice};
//     newArr.push(newObj);
//     console.log(price, discount, netPrice)
// }
// console.log(newArr)

const newArr = [];

// sales.forEach((obj) => {
//     let netPrice = obj.price * (1-(obj.discount || 0));
//     newArr.push({netPrice});
// });

sales.forEach((obj) => newArr.push({ newPrice : obj.price * (1-(obj.discount || 0))}))

console.log(sales)
console.log(newArr)