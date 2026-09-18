let num1 = prompt("Enter a number: ");
let operand = prompt("Enter the operand: +, -, *, /");
let num2 = prompt("Enter second number: ");

let number1 = Number(num1);
let number2 = Number(num2);

if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
    if (operand === "+") {
        alert(number1 + number2);
    } else if (operand === "-") {
        alert(number1 - number2);
    } else if (operand === "*") {
        alert(number1 * number2);
    } else if (operand === "/") {
        alert(number1 / number2);
    } else {
        alert("An error has occurred.");
    }
} else {
    alert("An error has occurred.");
}