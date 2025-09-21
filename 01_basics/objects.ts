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




export{}