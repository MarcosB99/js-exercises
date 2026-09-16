let width = prompt("Please provide a width to calculate the volume of a box: ");
width = width > 0 ? width : prompt("Enter a valid number");
let height = prompt("Please provide a height to calculate the volume of a box: ");
height = height > 0 ? height : prompt("Enter a valid number");
let length = prompt("Please provide a length to calculate the volume of a box: ");
length = length > 0 ? length : prompt("Enter a valid number");

alert(`Measurements: ${width}, ${height}, ${length}. Volume: ${width * length * height}`);