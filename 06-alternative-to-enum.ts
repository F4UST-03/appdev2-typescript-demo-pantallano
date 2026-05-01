(() => {
    // Literal Types (Alternative to Enum)
    let userRole, anotherUserRole: 'superadmin' | 'admin' | 'guest' | 'teacher' | 'student' = 'admin' 
    // I added anotherUserRole variable and added 'superadmin' to it to make it different from userRole

    userRole = 'admin'
    anotherUserRole = 'superadmin'
    console.log(userRole, anotherUserRole)

    function access(role: 'admin' | 'guest' | 'teacher' | 'student') {
        // I added conditional statements to use role parameter inside access() function.
        // if (role === 'admin') 
        //     console.log('Admin!')
        // else if (role === 'guest') 
        //     console.log('Guest!')
        // else if (role === 'teacher')
        //     console.log('Teacher!')
        // else if (role === 'student') 
        //     console.log('Student!')
        
        // or just using === operator to compare
        role === 'admin'
        role === 'guest'
        role === 'teacher'
        role === 'student'
        console.log(role+'!')
    }
    access('student') // output: student
})() // Invocator, added to run/execute the code. 
// I run the code using node.js in the terminal (npx tsx 06-alternative-to-enum.ts / npx ts-node 06-alternative-to-enum.ts)

