//reverse the string 

function reverseString(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

function reverseString2(str){
    return str.split("").reverse().join("");
}

function reverseString3(str){
    return [...str].reverse().join("");
}

console.log(reverseString("Hello"))
console.log(reverseString2("Hello"))
console.log(reverseString3("Hello"))