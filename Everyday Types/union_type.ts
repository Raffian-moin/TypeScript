// Union Type
// A variable can be one of the different types
let id: string | number;

id = 5;
console.log(5);

id = "ag123"
console.log(id);

// but assigning array to id will throw error
// id = [];

// Working with union types

function getId(id: string | number) {
    // As id can be either of string and number
    // when we pass id as string and we want to use string methods on id
    // we need to first check that id is string
    // it is called type narrowing; we narrowed down id variable from string and number to string
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

getId('abc');
