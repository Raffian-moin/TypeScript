// Index not necessarily has to be named index. It can be named anything
interface User {
    [index: string]: string | number
    // Could also be written as
    // [index: string]: string | number
}

let user: User = {
    name: "moin",
    age: 18,
    // following line will throw error because property value can be only string and number
    // isAdmin: true
}


interface Admin {
    [index: string]: string | number
    // following line will throw error because index signature forces other property value to match index property values
    // isAdmin: boolean
}

// To solve the above error

interface Admin1 {
    // adding boolean to the index signature resolves the error
    [index: string]: string | number | boolean
    isAdmin: boolean
}