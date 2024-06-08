function capReturnIndex(str){
    if(typeof str !== 'string') return 'Invalid input';
    let capStr = str.toUpperCase();
    let result = [];
    for(let i = 0; i < str.length; i++){
        if(capStr[i] === str[i]){
            result.push(i);
        }
    }
    return result
}

function capReturnIndex2(str){
    if(typeof str !== 'string') return 'Invalid input';
    let result = [];
    let regex = /[A-Z]/g
    let match;
    while(((match = regex.exec(str)) !== null)){
        result.push(match.index);
    }
    return result
}

console.log(capReturnIndex2("JavedChandPatel"))