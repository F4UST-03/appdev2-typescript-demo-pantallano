(() => {
    // Type Aliases or Custom Types
    // use `type` keyword to create custom type
    type Role = 'admin' | 'guest' | 'teacher' | 'student'

    // Complex Object Type Definition
    type User = {
        name: string;
        age: number;
        role: Role; // you can use as well the Role type in Object type
        permission: string[];
    }

    let userRole: Role = 'admin'
    console.log(userRole)

    let user: User = {
        name: 'Jori',
        age: 22,
        role: 'student',
        permission: ['read']
    }
    console.log('Name: '+user.name+'\n','Age: '+user.age+'\n', 'Role: '+user.role+'\n', 'Permission: '+user.permission)

    function access(role: Role) {
        role === 'admin'
        role === 'guest'
        role === 'teacher'
        role === 'student'
        console.log(role+'!')
    }
    access('student') // output: student!
})()