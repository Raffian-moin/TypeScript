
// With intersection we can combine the properties of multiple interfaces
// It is similar to interface extending
interface A {
    param1: boolean
}

interface B {
    param2: string
}

type combinedInterface = A & B

let combinedObj: combinedInterface = {
    param1: true,
    param2: "y"
}