while (true) {
    let num1 = prompt("Enter first number:");
    let num2 = prompt("Enter second number:");
    let operand = prompt("Enter operand (+, -, *, /)");
    let total;

    if (num1.toLowerCase() === "q" || operand.toLowerCase() === "q" || num2.toLowerCase() === "q") {
        break;
    }

    num1 = Number(num1);
    num2 = Number(num2);

    if (!Number.isNaN(num1) && !Number.isNaN(num2)) {
        switch (operand) {
            case "+":
                total = num1 + num2;
                break;
            case "-":
                total = num1 - num2;
                break;
            case "*":
                total = num1 * num2;
                break;
            case "/":
                total = num1 / num2;
                break;
            default:
                total = "Error: unknown operand";
        }
    } else {
        total = "Error: at least one of the entered values is not a number";
    }
    alert(total);
}