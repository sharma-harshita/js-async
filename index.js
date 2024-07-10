
console.log("before settimeout")

setTimeout(() => {
    console.log("user signed in");
    setTimeout(() => {
        console.log("check if user has token");
        setTimeout(() => {
            console.log("get product details");
            setTimeout(() => {
                console.log("get product details");
                setTimeout(() => {
                    console.log("get product details");
                    setTimeout(() => {
                        console.log("get product details");
                    }, 1000); 
                }, 1000); 
            }, 1000); 
        }, 1000);        
    }, 0);
}, 2000);x





console.log("after settimeout")