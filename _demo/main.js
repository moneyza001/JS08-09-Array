const log = console.log ;

log("Learn Array");

// const = CONSTANT (mutable ??)
// constant = can't reassign
// Array constant = same ADDRESS !!


// # Array Declaration
// Array Literal (ตรงตัว)
// element : สมาชิก

// const friend = ['Money', 'Non', 'Peakpoon', 'Fon'];

// Array Constructor
// const height = new Array(150, 160, 175);

// ## Access,Modify,Add,Delete
// Bracket Notation with Index


// Access
// log(friend[0]);
// log(friend[2]);
// log(friend[-1]); // undefined
// log(friend[10]); // undefined

// Update
// friend[0] = 'Gold';
// log(friend);

// friend[1] = 'Michael'
// log(friend);

//  ถ้าพยายาม update index ที่ไม่มีอยู่ === add
// friend[-1] = 'Pavit';
// log(friend)
// log(friend[-1])

// Add
// log(friend[3]);
// friend[4] = 'Git'
// log(friend)

// Delete
// delete friend[2];
// log(friend);
// log(friend[2]);
// let pop = friend.push()
// log(friend)
// log(pop)

// ## Basic Property

// <arr>.length
// log(friend.length)
// friend[5] = 'Mix'
// friend[6] = 'Mix'
// friend[4] = 'Mix'
// friend[friend.length] = 'Mix' //
// log(friend)
// log(friend.length)

// for (let i = 0; i <= friend.length - 1 ; i++){
//     // 0, 1, 2, 3, 4, 5, (length = 6)
//     console.log(i, friend[i])
// }

// for (let i = 0; i <= friend.length - 1 ; i++){
    // 0, 1, 2, 3, 4, 5, (length = 6)
    // console.log(i, friend[i])
// }
// Method  CRUD element

// const animals = ['Spider','Cat','Elephant'];

// Immutable : ไม่เปลี่ยนแปลงค่า (ถ้าจะเปลี่ยนต้องเขียนทับ)
// Mutable : เปลี่ยนแปลงค่าได้

// Method Push ทำให้ Array Mutetate ไหม ? True !!
// Method Push return length ออกมา

// let r = animals.push('Dog');
// log(animals);
// log(r); // 4

// let s = animals.unshift('Snanke','bird');
// log(animals);
// log(s); // 6

// let t = animals.pop();
// log(animals);
// log(t)

// let f =animals.shift();
// log(animals);
// log(f)


// Loop

const animals = ['Spider','Cat','Elephant'];

// for (let i = 0; i < animals.length; i++){
//     console.log(animals[i])
// }

// for...in (มอง array เป็น obj ประเภทหนึ่งได้)
/*
<key>:<value> ==> <index>:<object>
const arr = {
    0 : 'Bird',
    1 : "Cat",
    2 : 'Dog'
}
 */
// for(let index in animals) {
//     console.log(animals[index]);
// }

// for...of

for ( let element of animals) {
    log(element);
}

// Aside Topic : Higher Order Function
function add(x,y) {
    return x + y;
}
// log(add(5,6));

// Function Expression : FN as a value
const a = console.log;
const b = alert;


//  สร้าง Function ที่รับ parameter เป็น function

function addAndShow(x,y,showFn){
    let result = x + y;
    //call ShowFn
    showFn(`Result is : ${result}`);
    return result;
}

function show (result) {
    log(result)
}

// addAndShow(5,10,show)

const item = ['Football', 'Bag','Dish','Fork'];

// forEach 
// SynTax <array>.forEach(FN)
// array == Callet
// Higher order FN == forEach(รับ parameter is FN)

// item.forEach(      function () {}     )
// Callback ถูกเรียกใช้ตามจำนวนสมาชิกใน array 
// const iterateFn = function () {
//     console.log('Hi')
// };
// function iterateFn2(a){
//     console.log(a)
// } 

const iterateFn3 = (item,index,array) => console.log(item,index,array);
item.forEach(iterateFn3)