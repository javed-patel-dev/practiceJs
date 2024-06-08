// same example can be achieve by promise

function add(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let a = 10;
            let b = 20;
            let result = a+b;
            resolve(result);
        }, 2000);
    })
}

add().then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})