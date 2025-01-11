// function getUser
// function getOrdersByUser
// function getOrderDetailsByOrderId

// talk about promise chaining first, that if you want to pass data of first promise to second,
// and second promise data to third, then we will have to write a lot then and catch blocks to handle the response of the promise but with
// async await we do not have to write multiple then catch blocks, we can wrap enire functionality into one try catch block.

// const asyncFunc = async () => {
//     const response = await fetch(resource);
//     const data = await response.json();
// }

// console.log(1);
// cosole.log(2);

// asyncFunc().then(data => console.log(data));

// console.log(3);
// console.log(4);
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched from server");
        }, 2000);
    });
}

async function handleData() {
    const data = await fetchData();
    console.log(data);
    console.log("Processing data...");
}


async function handleData() {
    try {
        const data = await fetchData();
        console.log(data);
        console.log("Processing data...");
        console.log("Displaying data...");
    } catch (error) {
        console.error("Error:", error);
    } finally {
        console.log("helo");
    }
}

handleData();