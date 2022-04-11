//* ===== Directions =====
//* - Write a function that takes a string as an input,
//* - and return the a new string with the reversed order of characters.

//* ===== Examples =====
//* reverseStr('hello') === 'olleh'
//* reverseStr('apple') === 'elppa'


//* @param str === input string. 

function reverseStr(str){
    // TODO: Write your code below this line
    let reversed = '';

    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
};

console.log(reverseStr('hello'));

console.log(reverseStr('apple'));









//? Hints: 
//? 1- don't forget to call your function. 
//? 2- don't forget to return the new string.
//? 3- use console.log() to debug your code.