// a function passed as an argument in another function

function multi(a, b){
    console.log(a*b);
}

function call(callback){ // can be pass as any name 
    setTimeout(()=>{
        let a = 10;
        let b = 20;
        callback(a, b);
    })
}

call(multi);

//a callback function is a function passed as an argument in another function that is called inside the outer function when the outer function is called.