// sorting array 

let arr = [1, 22, 13, 4, 5];
function sortArray(arr){
    //bubble sort
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] < arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr
}

function sortArray2(arr){
    return arr.sort((a, b) => a - b);
}   

function sortArray3(arr){
    
}

console.log(sortArray(arr));
console.log(sortArray2(arr));


