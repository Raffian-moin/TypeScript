// When two type alias or interfaces has a common type literal and we
// try to narrow down their union type by that type literal, typescript removes all other types from
// union and works with the matched type
interface Person1 {
    name: "person1";
    age: number
}

interface Person2 {
    name: "person2"
    isAdmin: boolean
}

// Both the interface has name type literal and we are narrowing
// by that type literal and typescript knows that we are trying to work
// with person1 and no errors is thrown
function getPersonInfo(person: Person1 | Person2) {
    if (person.name === "person1") {
        console.log(person.age);
    } else {
        console.log(person.isAdmin);
    }
}

getPersonInfo({name: "person1", age: 18})