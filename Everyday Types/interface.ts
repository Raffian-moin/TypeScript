// interface is to define an object structure
// and its parameter type annotations
interface ID {
  id: string | number;
}

// We can extend an interface
interface ID {
  name: string;
}



let myObj: ID = {
  id: 2,
  name: "Moin"
}

console.log(myObj.id);
console.log(myObj.name);