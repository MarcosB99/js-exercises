function unique(arr) {
    let newArr = new Set(arr);
    return [...newArr];
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings));