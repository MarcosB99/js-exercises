"use strict"

const prefix = "username_";

let userName = "Jack";
// const userName = "Adam";
const userName2 = "Adam";
let prefixedUserName;
// const prefixedUserName;
const prefixedUserName2 = prefix + userName2;

userName = "John";
prefixedUserName = prefix + userName;

// console.log(prefixedUserName + prefixedUserName2);
console.log(prefixedUserName);
console.log(prefixedUserName2);

let height = 180;
{
    let height = 200;
    height = height + 10;
}

console.log(height);

console.log(0x21);

console.log(100 / 0);

console.log(20n + 10);