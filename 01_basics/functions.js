"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(value) {
    return value.toUpperCase();
}
function signUpUser(username, password, isPaid) {
}
// default value false is provided in isPaid
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
function multipleByFive(num) {
    return num * 5;
    // return "Hello"    // it will give error as we mentioned return type should be a number
}
// In below case we don't need to give return type else it will give error
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
addTwo(5);
getUpper("four");
signUpUser("niketa", "123", false);
loginUser("John", "john@gmail.com"); // default value false is provided in isPaid
var result = multipleByFive(5);
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
//const heros = [1,2,3]
heros.map(function (hero) {
    return "Hero is ".concat(hero);
});
// function with no return then mention return as void
function consoleError(errmsg) {
    console.log(errmsg);
}
// function never returns a value (func throws an exception or terminates the execution)
function handleError(errmsg) {
    throw new Error(errmsg);
}
