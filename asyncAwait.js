function promise1 (){
    return new Promise((resolve, reject)=>{
        if(10<5){
            resolve("Promise is resolved")
        }else{
            reject("Promise is rejected")
        }
    })
}


// promise1().then(res=>{
//     console.log(res);
// })

async function x(){
    try{
        const data = await promise1()
        console.log("Try block", data);
    }catch(error){
        console.log("Catch block", error);
    }
}

x()