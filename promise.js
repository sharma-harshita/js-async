const result = new Promise((resolve, reject) => {
    const success = true;

    if(success){
        resolve("Promise is resolved")
    }else{
        reject("Promise is rejected")
    }
})


result
    .then((response)=>{
        console.log("then", response);
    })
    .catch((error)=>{
        console.log("catch", error);
    })
    .finally(()=>{
        console.log("Promise is completed");
    })

