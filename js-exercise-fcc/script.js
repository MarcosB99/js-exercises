function pyramid(str, row, bool) {
    const result = [];
    for (let i = 0; i < row; i++) {
        let spaces = " ".repeat(row - i - 1);
        let chars = str.repeat((i * 2) + 1);
        result.push(spaces + chars);
    }
    if (bool) {
        return "\n" + result.reverse().join("\n") + "\n";
    }
    return "\n" + result.reverse().join("\n") + "\n";
}

console.log(pyramid("o", 4, false));