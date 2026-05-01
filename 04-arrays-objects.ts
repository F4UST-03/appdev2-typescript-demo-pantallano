let hobbies = ["Listening to music", "Dancing", "Watching anime"]

// hobbies.push(10) // runs but ts does not accept it since the array consists only of strings
hobbies.push('10')
console.log(hobbies)
// console.log(hobbies[3]) // output: 10


// let userList: (string | number)[];
let userList: Array<string | number>;
userList = ["Jori", "Jojo1994", 123456] // ts accepted the number since it is assigned to be either string or number in let

console.log(userList)
// console.log(userList[2]) // output: 123456


let user: {
    name: string;
    age: number;
    hobbies: Array<string | number>, // I added number
    role: {
        description: string,
        id: number
    }
} = {
    name: "Jorilyn",
    age: 22,
    hobbies: ["Listening to music", "Dancing", "Watching anime"],
    
    role: {
        description: 'student',
        id: 1
    }
}

// Must not null or undefined, when {} is assigned in the variable, the basis would be the user object (let user = {keys: values})
let val: {} = 'Jorilyn Pantallano'
console.log(val)

let myName: {} = user.name 
// console.log(myName) // output: Jorilyn
let myAge: {} = user.age 
// console.log(myAge) // output: 22
let hobby: {} = user.hobbies[2] 
// console.log(hobby) // output: Watching anime
let role: {} = user.role.description 
// console.log(role) // output: student

// let addNum = user.hobbies.push(7)
// console.log(addNum) // output: 4 (4 elements in user.hobbies)
// console.log(user.hobbies) // output: [ 'Listening to music', 'Dancing', 'Watching anime', 7 ]



// Flexible Object - Record Type
let data: Record<string, number | string | boolean> // I added boolean so that the isStudent won't have ts issue
data = {
    1: 1,
    name: 'Jori',
    isStudent: true
}

console.log(data)
// console.log(data[1]) // output: 1