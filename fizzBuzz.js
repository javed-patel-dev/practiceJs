const fizzBuss = (num)=>{
    if( typeof num !== 'number') return 'Invalid input';
    for(let i=1; i<=num; i++){
        if(i%3 === 0 && i%5 === 0){
            console.log(`the number ${i} is FizzBuzz`);
        }else if(i%3 === 0){
            console.log(`the number ${i} is Fizz`);
        }else if(i%5 === 0){
            console.log(`the number ${i} is Buss`);
        }else{
            console.log(i);
        }
    }
}

fizzBuss(15)