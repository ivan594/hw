// Задача 1

function reverseStr (str) {
    return str.split("").reverse().join("");
}

console.log(reverseStr('Hello'));



// Задача 2

function str_rot13(str) {
    let arr = [];

    for (let i=0; i<str.length; i++) {
        
        if (str.charCodeAt(i)>=65 && str.charCodeAt(i)<=77) {
            arr.push(String.fromCharCode(str.charCodeAt(i)+13));
        } 
        else if (str.charCodeAt(i)>=78 && str.charCodeAt(i)<=90) {
            arr.push(String.fromCharCode(str.charCodeAt(i)-13));
        } 
        else if (str.charCodeAt(i)>=97 && str.charCodeAt(i)<=109) {
            arr.push(String.fromCharCode(str.charCodeAt(i)+13));
        } 
        else if (str.charCodeAt(i)>=110 && str.charCodeAt(i)<=122) {
            arr.push(String.fromCharCode(str.charCodeAt(i)-13));
        } 
        
        else if (str.charCodeAt(i)<65) {
            arr.push(str[i]);
        }
    }  
    return arr.join('');
}
console.log(str_rot13('mama govorit chto ya klassniy'));


// Задача 3

function generate(numbersCount, arraysCount) {
    const arr = [];
    
    for (let i = 1; i <= arraysCount; i++) {
        const numberArr= [];

        for (let j = 1; j <= numbersCount; j++) {
            numberArr.push(j);
        }
        arr.push(numberArr);
    }
    return arr;
}
console.log(generate(5, 3));

