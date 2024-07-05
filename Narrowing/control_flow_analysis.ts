// Based on the allowed type of a variable can be of various types throughout it's journey
// This is called Control Flow Analysis
// In the below code param can be number, string or boolean
// then we assign a number to param and typescript shows that param is only number
// else we assign boolean to param and typescript shows that param is only boolean
// In the last line because either if/else can be executed and so param can be either
// number | boolean
function getParameter(param: number | string | boolean) {
    if (typeof param  === "number") {
        param = 12;
        // here param is number
        console.log(param);
    } else {
        param = true;
        // here param is boolean
        console.log(param);
    }

    // here param is number | boolean
    return param
}