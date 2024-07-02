interface Box<T> {
    content: T
}

let redBox: Box<string> = {
    content: "red"
}

let emptyBox: Box<boolean> = {
    content: false
}


type OrNull<Type> = Type;

type OneOrMany<Type> = Type | Type[];

type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;

let z: OneOrManyOrNull<number[]> = [1, 2, 3]