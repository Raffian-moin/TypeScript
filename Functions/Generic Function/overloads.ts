// If we want to make function with different arguments and type we can write function overload
function makeAddress(street: string): void;
// Function with three required params
function makeAddress(street: string, division: string, district: string): void;
// Function with one optional param
// If this function signature was commented out and we try to call the function
// with 2 parameters then it would be error
function makeAddress(street: string, division: string, district?: string): void;

function makeAddress(street: string, division?: string, district?: string) {
    if (division && district) {
        console.log(`${street}, ${division}, ${district}`);
    } else if (division) {
        console.log(`${street}, ${division}`);
    } else {
        console.log(`${street}`);
    }
}

// OK
makeAddress("16");
// OK
makeAddress("16", "Chittagong", "Cumilla");
// OK but it would be error if third function signature was commented out
// Because there was no function signature with 2 parameters
makeAddress("16", "Chittagong");


// overload and implementation signature

// overload function parameter should match with implementation function
// First parameter can be either string or boolean
function getName(name: string): void
// Shows error
function getName(name: boolean): void

// But implementation says that first parameter can be only string
function getName(name: string): void {
    console.log(name);
}

// overload function's return type and implementation function's return type should match
// first function returns string and second function returns number
function getId(id: string): string
// Shows error
function getId(id: number): number

// Implementation function only returns string
function getId(id: string | number): string {
    return id;
}
