interface Person {
    name: string;
    // to make a property non-writable we define it readonly
    readonly age: number;
    // we can make a property optional my '?' keyword
    address?: number;
}

let employee: Person = {
    name: "Moin",
    age: 18
}

console.log(employee.age);


// Readonly rules
interface User {
    readonly details: {
        name: string,
        age: number
    }
}

let userDetailsObj =  {
    name: "Moin",
    age: 27
}


let user: User = {
    details: userDetailsObj
}

// we can change the internal properties of a readonly property
user.details.name = "Raffian"

// We can't change or write the property as a whole
// Following line of code will give compile error
// user.details = userDetailsObj