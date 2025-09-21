// string

let greetings: string = "Hello"
console.log(greetings)

// number
let score: number = 33455.44

// boolean
let isLoggedIn: boolean = true

// type inference
let age = 10  //(here TS will infer its as type number)

// any - where TS don't know what value will come in variable it consider type of that variable as any
// any is not type checked so we should avoid it
// Use the compiler flag noImplicitAny to flag any implicit any as an error
let hero

function getHeros () {
    return "Thor"
}

hero = getHeros()


export {}