// sum to a target value from array of numbers
function sum(arr, target){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
}

function sum2(arr, target){
    for(let i = 0; i < arr.length; i++){
        let diff = target - arr[i];
        if(diff in arr){
            return [arr[i], diff];
        }
    }
    return null;
}
console.log(sum2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6))

