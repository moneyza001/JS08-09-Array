// const arr = [2, 3, 5, 7, 11];

// let squareArr = (arr) => {
//     arr.forEach((item,index,array) => {
//         arr[index] = arr[index] ** 2;
//     });
// }

// squareAA
//(array) => new Array
const arr = [2, 3, 5, 7, 11];

// start reuse logic
function squareArr(array) {
    const newArr = [];
    
    for(let i = 0; i < array.length; i++) {
        newArr.push(array[i] ** 2);
    }
    return newArr;
}
// refacter ด้วย !!


let newArray = squareArr(arr);
console.log(newArray)
console.log(arr)