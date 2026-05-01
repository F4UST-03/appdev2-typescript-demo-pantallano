console.log("Hello World!");

var userName = 'Jorilyn'; // no var type specifications
var userAge = 22; // no var type specifications

userAge = 23; // no error indicator

console.log(`Username - ${userName}`)
console.log(`Age - ${userAge}`)

function add(a, b = 5) {
    // if (b === void 0) // returns undefined
    return a + b;
}
console.log(add(10));
// add('10') 
console.log(add(10, 6));
// add(10, '6')
// console.log(add)
