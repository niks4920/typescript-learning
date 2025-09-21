"use strict";
// type aliases   - create ur own datatype
Object.defineProperty(exports, "__esModule", { value: true });
function createUser3(user) {
    return { name: "", email: "", isActive: true };
}
createUser3({ name: "", email: "", isActive: true });
function createPoint(pt) {
    console.log(pt.x);
    console.log(pt.y);
}
createPoint({ x: 10, y: 10 });
var myUser = {
    _id: "12345",
    name: "h",
    email: "h@h.com",
    isActive: true
};
myUser.email = "h@gmail.com";
