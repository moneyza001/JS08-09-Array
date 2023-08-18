// Homework lab

const array1 = [1, 2, 30, 400] // result: [2, 4, 60, 800]
let result1 = array1.map(item => item*2)


const array2 = [1, 2, 3, 4]; // result: ["1", "2", "3", "4"]
const result2 = array2.map(item => item + '')

const array3 = [1, '1', 2, {}]; // result: ["number", "string", "number", "object"]
const result3 = array3.map(x => typeof x)

const array4 = ['apple', 'banana', 'orange']; // result: ["APPLE", "BANANA", "ORANGE"]
const result4 = array4.map(x => x.toUpperCase())

const array5 = [1, 3, 4, 5, 6, 7, 8]; // result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
const result5 = array5.map(x => {return x %2 == 0 ? 'even' : 'odd'})

const array6 = [1, -3, 2, 8, -4, 5]; // result: [1, 3, 2, 8, 4, 5]
const result6 = array6.map(x => {return x > 0 ? x : -x} )

const array7 = [100, 200.25, 300.84, 400.3]; // result: ["100.00", "200.25", "300.84", "400.30"]
const result7 = array7.map(x => x.toFixed(2))

const array8 = [0, 5, 10, 7, 6, 5, 0]; // result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
const arrayMonth = ['Jan', 'Feb','Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// const result8 = array8.map((item,index) =>{return (array8[item] == arrayMonth[index]) ? arrayMonth[index] : 'Out of Month'})
const result8_1 = array8.map(item = item => arrayMonth[item])

const array9 = [1, 16, 81, 256, 625, 1296]; // result: [1, 2, 3, 4, 5, 6]
const result9 = array9.map(x => Math.sqrt(Math.sqrt(x)))


const array10 = [
    { name: 'apple', age: 14 },
    { name: 'banana', age: 18 },
    { name: 'watermelon', age: 32 }
];  // result: ["apple", "banana", "watermelon"]
const result10 = array10.map((el,index) => {return array10[index].name})

const array11 = [
    { name: 'apple', age: 14 },
    { name: 'banana', age: 18 },
    { name: 'watermelon', age: 32 }
];// result: [14, 18, 32]
const result11 = array11.map((el,index) => {return el.age})

const array12 = [
    { name: 'apple', surname: 'London' },
    { name: 'banana', surname: 'Bangkok' },
    { name: 'watermelon', surname: 'Singapore' }
];// result: ["apple London", "banana Bangkok", "watermelon Singapore"]
const result12 = array12.map((el,index,array) => {return `${el.name} ${el.surname}`})

const array13 = [
    { name: 'apple', birth: '2000-01-01' },
    { name: 'banana', birth: '1990-10-01' },
    { name: 'watermelon', birth: '1985-12-01' }
];// result: [
  //   { name: "apple", birth: "2000-01-01", age: 21 },
  //   { name: "banana", birth: "1990-10-01", age: 31 },
  //   { name: "watermelon", birth: "1985-12-01", age: 36 },
  //]
// const result13 = array13.map((el,index,array) => ({name: el.name, birth: el.birth}))
const result13 = array13.map(function (fruitObj) {
    const newFruitObj = Object.assign({}, fruitObj);
    const birthYear = +fruitObj.birth.slice(0,4);
    newFruitObj.age = 2021 - birthYear;
    return newFruitObj
});




const array14 = [
    { name: 'apple', birth: '2000-01-01' },
    { name: 'banana', birth: '1990-10-10' },
    { name: 'watermelon', birth: '1985-12-30' }
];
//   // result: [
//   //     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//   //     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//   //     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
//   // ]
// INPUT JS TO HTML TAG
const Month = ['Jan', 'Feb','Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const newArray14 =  array14.map(function(obj) {

    let name = obj.name
    let day = obj.birth.slice(-2);
    let monthIndex = obj.birth.slice(-5,-3)-1;
    let year = obj.birth.slice(0,4);
    const resultSreing = `<tr> <td>${name}</td> <td>${day} ${Month[monthIndex].toLocaleLowerCase} ${year} </td> </tr>`
}) 