let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfTripledNumbers = arr.filter(num => num % 2 === 0).map(num => num * 3).reduce((total, current) => total + current, 0);

console.log(sumOfTripledNumbers);