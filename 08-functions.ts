(() => {

    // Function Return Value Types
    function add(a: number, b: number): number { // you can omit the function type since typescript can infers it
        return a + b
    }

    console.log(add(5, 10))
    // add("5", 10) // runs when I use npx tsx 08-functions.ts command (output: 510)
    // but npx ts-node 08-functions.ts shows argument error since it is assigned to a variable type, number


    // Special Type `void` - return nothing
    // Function doesn't return a meaningful value, but it does finish
    function log(message: string): void {
        console.log(message)
    }

    log("Hello, World!")
    // log("Hi, Jojo!")


    // Another Special Type `never`
    // Function never finishes normally (throws error, infinite loop)
    function logAndThrow(errorMessage: string) {
        console.log(errorMessage)
        throw new Error(errorMessage) // throws error and ends the function
    }

    // logAndThrow("Something went wrong!") // output: Something went wrong! with thrown error and ends the function, better not to use this



    // Function as Types
    // Useful for callback functions
    // () => {} is not same as () => void
    // () => {} - arrow function
    // () => void - function type
    function performJob(cb: (m: string) => void) {  // you can also use cb: Function but () => void is the best practice
        console.log('Performing Job...')
        cb('Job Done!')
    }
        let logMsg = (msg: string): void => { // you can also use (msg: string) => void
            console.log(msg)
        }

    performJob(logMsg)


    // Useful for objects and methods
    type User = {
        name: string;
        age: number;
        greet: () => string; // function type with string assigned body
    }

    let user: User = {
        name: "Jori",
        age: 23,
        // greet: function() {
        //     console.log(`Hello, ${this.name}`)
        //     return this.name
        // },
        greet() {
            console.log(`Hello, ${this.name}`) // use `` for to use ${this.name} inside the string
            return this.name // to return or use the user name
        }
    }

    user.greet()
})()