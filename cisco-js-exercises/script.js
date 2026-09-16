let bool1 = Boolean(1);
let num1 = Number("302");
let bigInt1 = BigInt(0x001);
let str1 = String(54);
let undef = undefined;

console.log(`${typeof bool1} [${bool1}]`);
console.log(`${typeof num1} [${num1}]`);
console.log(`${typeof str1} [${str1}]`);
console.log(`${typeof bigInt1} [${bigInt1}]`);
console.log(`${typeof undef} [${undef}]`);

let chainStr = "1234";
let chainNum = Number(chainStr);
let chainBigInt = BigInt(chainNum);
let chainBoolean = Boolean(chainBigInt);

console.log(`${chainBoolean} [${typeof chainBoolean}]`);

// or

let chainBoolean2 = Boolean(BigInt(Number("1234")));
