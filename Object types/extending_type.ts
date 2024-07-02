interface Animal {
    canMove: boolean
    hasLegs: boolean
}

// We can inherit properties from another interface by extending
interface Tiger extends Animal {
    hasTail: boolean
}

// Can extend or inherit from multiple interface
interface TigerBreed extends Tiger, Animal {
    breed: string
}


let tiger: Tiger = {
    hasTail: true,
    canMove: true,
    hasLegs: true
}

let tigerBreed: TigerBreed = {
    hasTail: true,
    canMove: true,
    hasLegs: true,
    breed: 'Royal Bengal Tiger'
}


interface A {
    param: string
}

interface B {
    param: boolean
}

// If we inherit from multiple interface and parent interfaces have same property but their types are
// different it will throw error
interface C extends A, B {

}