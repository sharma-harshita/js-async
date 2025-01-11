const promise1 = new Promise((resolve, reject)=>{
    const success = true;

    if(success){
        resolve("Promise 1 is resolved")
    }else {
        reject("Promise 1 is rejected")
    }
})

const promise2 = new Promise((resolve, reject)=>{
    const success = false;

    if(success){
        resolve("Promise 2 is resolved")
    }else {
        reject("Promise 2 is rejected")
    }
})

const promise3 = new Promise((resolve, reject)=>{
    const success = true;

    if(success){
        resolve("Promise 3 is resolved")
    }else {
        reject("Promise 3 is rejected")
    }
})

Promise.all([promise1, promise2, promise3])
    .then(res=>{
        console.log("Promise success response", res);
    })
    .catch(err=>{
        console.log("Promise fail error", err)
    })
    .finally(()=>{
        console.log("Promise.all is completed.");
    })