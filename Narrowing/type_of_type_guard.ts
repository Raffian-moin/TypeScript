// Type Guards are checks in typescript where
// we check in our code whether a value is of certain type

// type of returns type of following types

// actual type  typeof returns
// ----------- --------------
// numbers     numbers
// string      string
// boolean     boolean
// undefined   undefined
// obj         obj
// array       obj
// null        obj
// function    function
// symbol      symbol

// We can use typeof for a union type and narrow down the type and work
// with that type


function test(param:any) {
    if (typeof param === "string") {
        console.log(param.toUpperCase());
    }

    if (typeof param === "undefined") {
        console.log("param is undefined");
    }

    // because obj, array and null returns object type, if we want to work
    // with pure object type we need to exclude array and null
    if (typeof param === "object" && !Array.isArray(param) && param !== null) {
        console.log(param.name);
    }
}

// pass string
test("string")

let x;
// pass undefined
test(x)

// pass object
test({name: "Moin"})