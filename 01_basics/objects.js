"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
}
createUser({ name: "niketa", isActive: true });
// function is returning object
function createCourse() {
    return { name: "typescript", isActive: true };
}
// issue with object - we have 2 parameter in function but we are able to pass 3 arguments
function createUser2(_a) {
    var string = _a.name, boolean = _a.isActive;
}
var newUser = { name: "niketa", isActive: true, email: "niketa@n.com" };
createUser(newUser);
function createUser3(user) {
    return { name: "", email: "", isActive: true };
}
createUser3({ name: "", email: "", isActive: true });
function createPoint(pt) {
    console.log(pt.x);
    console.log(pt.y);
}
createPoint({ x: 10, y: 10 });
