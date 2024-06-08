function BinarySearch(arr, target){
    let left = 0
    let right = arr.length -1
    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        if(arr[mid] === target){
            return mid
        }else if(arr[mid] < target){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    return -1
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let target = 32
let result = BinarySearch(arr , target)


console.log(result)
+console.log(BinarySearch([1, 2, 3, 4, 5], 3)) // 2
+console.log(BinarySearch([1, 2, 3, 4, 5], 6)) // -1
+console.log(BinarySearch([1, 2, 3, 4, 5], 0)) // -1
+console.log(BinarySearch([], 3)) // -1
+console.log(BinarySearch([1], 1)) // 0
+console.log(BinarySearch([1, 2, 3, 4, 5], 4)) // 3
+console.log(BinarySearch([1, 2, 3, 4, 5], 1)) // 0
+console.log(BinarySearch([1, 2, 3, 4, 5], 5)) // 4
+console.log(BinarySearch([1, 2, 3, 4, 5], 2)) // 1
+console.log(BinarySearch([1, 2, 3, 4, 5], 3)) // 2
+console.log(BinarySearch([1, 2, 3, 4, 5], 3)) // 2
