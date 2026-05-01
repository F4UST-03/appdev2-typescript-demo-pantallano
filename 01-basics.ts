console.log("Hello World!")

let userName: string = "Jori";
let userAge: number = 22;

userAge = 23 // the userAge should not be a string, although this would still run
// this would be the output in the console

console.log(`Username - ${userName}`)
console.log(`Age - ${userAge}`)

function add(a: number, b = 5) {
    return a + b
}

console.log(add(10))
// add('10') // output: 105, it runs but shows argument error since it is assigned to a variable type, number
console.log(add(10, 6)) 
// add(10, '6') // output: 106
