function createUser({name: string, isActive: boolean}) {
    
}

createUser({name: "niketa",isActive: true})

// function is returning object
function createCourse(): {name: string, isActive: boolean} {
   return {name: "typescript", isActive: true}
}

// issue with object - we have 2 parameter in function but we are able to pass 3 arguments

function createUser2({name: string, isActive: boolean}) {
    
}
let newUser = {name: "niketa",isActive: true, email: "niketa@n.com"}
createUser(newUser)


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

export{}