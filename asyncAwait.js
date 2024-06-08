// same example can be achieve by async/awaits

function sub(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let a = 20;
            let b = 10;
            let result = a-b;
            resolve(result);
        }, 1000);
    })
}

async function exute(){
    try {
        let result = await sub();
        console.log(result);
    } catch (error) {
        console.log(error.message)
    }
}

exute()

// async and await pause execution within the function until the promise is resolved. It also provides a way to handle errors in the promise. Outside the async function the excution is not paused. it is running. that is why it is asynchronous, but give synchronous behaviour in async function when we use await.