// Special Type - null
let a: null;

a = null
// a = "Hi" // error when using npx ts-node command, should be null or empty
// console.log(a) // the output is null


let b: null | string // either null or string

b = null
b = "Hi"
// b = 10 
// console.log(b) // the output is Hi, null won't show


// Special Type - undefined
let c: undefined; // undefined, should not assign any value or statement but not empty

c = undefined
// c = null // error
// c = "Hi" // error
// console.log(c) // the output is undefined


let d: undefined | string // either undefined or string

d = undefined
d = "Hi"
// d = null
// d = 10
// console.log(d) // the output is Hi and undefined won't show

console.log(`${a}\n${b}\n${c}\n${d}`)
