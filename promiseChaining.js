function userLogin (){
    return new Promise((resolve, reject)=>{
        if(true){
            // resolve("User John has logged in.")
            resolve({name:"Jhn"})
        }
    })
}

function getLandingPage (username){
    return new Promise ((resolve, reject) => {
        if (username === "John"){
            resolve("This is the landing page")
        }
    })
}

userLogin()
    .then(res => {
        console.log(res);
        return getLandingPage(res.name)
    })
    .then(res => {
        console.log(res);
    })