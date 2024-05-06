// Literal type
// If we want to limit the values of a variable we use
// literal types

// here name can be only rahim and karim
type name = "rahim" | "karim"

let myName: name = "karim";

console.log(myName);

// here we declared a variable click and said that
// its value can be only click and dbclick and we
// assigned click to it
// so it's valid
let click: "click" | "dbclick" = "click";

// click = "dbclick";

console.log(click);

// we can also use literal types with function
// the return type can be either 1, 3 or 5
function getOddNumber(): 1| 3| 5 {
    return 1;
    // returning 2 will throw error
    // return 2;
}

console.log(getOddNumber())