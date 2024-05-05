// If we need to use a variable or parameter in multiple
// area of the code and the type of the variable or parameter is
// same in everywhere, instead of defining type annotation for
// variable or parameter everywhere we can define the variable or
// parameter in one place and use it everywhere
function getId(id) {
    console.log(id);
}
getId("abc");
getId(123);
// It will throw error as array is not allowed type for ID
// getId([])
