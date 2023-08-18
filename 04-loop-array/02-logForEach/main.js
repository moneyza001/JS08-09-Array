const names = ['Mike', 'Sid', 'Jack', 'Bill'];


function logPerson(persun, order){
    console.log(order + 1, persun)
}

// Callback : Literal, On the fly
names.forEach((item,index) => console.log(`${index + 1}. ${item}`))

//  Callback : Named, Reference.
names.forEach(logPerson)