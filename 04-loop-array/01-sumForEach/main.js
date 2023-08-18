const array = [29, 17, 13, 47, 23, 31];
let sum = 0;



array.forEach(item => sum = sum + item  )

console.log(sum)

// V.2 normal loop
// for(let i = 0 ; i < array.length; i++) {
//     sum += array[i];
// }

// V.3 for in
// for(let index in array) {
//     sum += array[index];
// }

// V.4 for of
// for(let element of array){
//     sum += element;
// }