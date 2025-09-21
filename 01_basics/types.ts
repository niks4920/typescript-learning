// type aliases   - create ur own datatype


type User = {
    name: string
    email: string
    isActive: boolean
}

function createUser3(user: User) : User {
    return {name: "", email: "", isActive: true}
}

createUser3 ({name: "", email: "", isActive: true})


type point = {
    x: number
    y: number
}

function createPoint(pt: point) {
    console.log(pt.x);
    console.log(pt.y)   
}

createPoint({x: 10, y: 10})

// readonly, optional and create a new type using existing type

type User2 = {
    readonly _id: string    // readonly
    name: string
    email: string
    isActive: boolean
    credcardDetails ? : number   //optional
}

let myUser: User2 = {
    _id: "12345",
    name: "h",
    email: "h@h.com",
    isActive: true
}

myUser.email = "h@gmail.com"
// myUser._id = "abcd"    // not allowed to change readonly 


// creating new type from existing type

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

type creditCardDetails = cardNumber & cardDate & {
    cvv: number
}

export{}