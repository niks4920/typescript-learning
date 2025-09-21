"use strict";
// string
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello";
console.log(greetings);
// number
var score = 33455.44;
// boolean
var isLoggedIn = true;
// type inference
var age = 10; //(here TS will infer its as type number)
// any - where TS don't know what value will come in variable it consider type of that variable as any
// any is not type checked so we should avoid it
// Use the compiler flag noImplicitAny to flag any implicit any as an error
var hero;
function getHeros() {
    return "Thor";
}
hero = getHeros();
