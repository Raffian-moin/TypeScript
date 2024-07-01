interface Rectangle {
    width?: number
    height?: number
}

// When directly assigning value to variable if some interface property is missing it will throw error
// the following code block will throw error because widt doesn't exist in interface
let rectangle: Rectangle = {
    widt: 18,
    height: 18
}

// But we can avoid error if we first take a object
let rectangleObj = {
    wid: 18,
    height: 18
}

// then assign the object to interface object
// here width property is missing but we are not facing any error
let rectangle1: Rectangle = rectangleObj

// When passing object directly to function argument if any interface property is missing it will throw error
// the following code block will throw error because widt doesn't exist in interface
function calculateArea(rectangleParam:Rectangle) {
    console.log("area");
}

calculateArea({widt: 18, height: 18})