function addTwo (num: number) {
    return num + 2
}

function getUpper(value: string) {
    return value.toUpperCase()

}

function signUpUser(username: string, password: string, isPaid: boolean) {

}
// default value false is provided in isPaid
let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

function multipleByFive (num: number): number {
    return num * 5
   // return "Hello"    // it will give error as we mentioned return type should be a number
}

// In below case we don't need to give return type else it will give error
function getValue (myVal: number) {
    if(myVal>5){
        return true
    }
    return "200 OK"
}


addTwo(5)
getUpper("four")
signUpUser("niketa","123", false)
loginUser ("John","john@gmail.com")   // default value false is provided in isPaid

let result = multipleByFive(5)


const getHello = (s: string): string => { 
    return ""
}


const heros = ["thor","spiderman","ironman"]
//const heros = [1,2,3]

heros.map((hero): string => {
    return `Hero is ${hero}`
})

// function with no return then mention return as void
function consoleError(errmsg: string): void {
    console.log(errmsg); 
}

// function never returns a value (func throws an exception or terminates the execution)
function handleError(errmsg: string): never {
    throw new Error(errmsg) 
}

export{}