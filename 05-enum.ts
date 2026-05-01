(() => {
    enum Role {
        // SuperAdmin,
        // SuperAdmin = 1,
        // SuperAdmin = 0, // I added this for let userRole: Role = 0; to work
        SuperAdmin = 'SuperAdmin',
        // Teacher,
        Teacher = 'Teacher',
        // Student,
        Student = 'Student',
    }

    // let userRole: Role = 0;
    let userRole: Role = Role.SuperAdmin;
    // let userRole: Role = Role.Student;
    console.log(userRole) // output: SuperAdmin

})(); // invocator added to run/execute the code




// function named IIFE w/ enum
// (function(user) {
//     enum Role {
//         // SuperAdmin,
//         // SuperAdmin = 1,
//         // SuperAdmin = 0, // I added this for let userRole: Role = 0; to work
//         SuperAdmin = 'SuperAdmin',
//         // Teacher,
//         Teacher = 'Teacher',
//         // Student,
//         Student = 'Student',
//     }

//     // let userRole: Role = 0;
//     // let userRole: Role = Role.SuperAdmin;
//     let userRole: Role = Role.Student;
//     console.log(userRole)
//     console.log('Hello', user+'!', 'Your role is', userRole)

// })('Jori'); // I added my name inside the invocator to call the declared local function(user)

