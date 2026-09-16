const trainTicket = {
    from: "Estación Tipografía",
    to: "Centra Sur",
    price: 5
};

console.log(trainTicket.from);
console.log(trainTicket.to);
console.log(trainTicket.price);

const person = {};

person.name = "Marcos";
person.surname = "Barrientos";

console.log(person.name);
console.log(person.surname);

const jsLibrary = [
    {
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        pages: 460
    },
    {
        title: "Programming JavaScript Applications",
        author: "Eric Elliott",
        pages: 254,
    },
    {
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        pages: 352
    }
];

jsLibrary.push({
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254
});

console.log(`${jsLibrary.length}, ${jsLibrary[0].title}, ${jsLibrary[1].title}, ${jsLibrary[2].title}, ${jsLibrary[3].title}`);

const newJsLibrary = jsLibrary.slice(-2);

console.log(newJsLibrary);

jsLibrary.shift();

console.log(`${jsLibrary.length}, ${jsLibrary[0].title}, ${jsLibrary[1].title}, ${jsLibrary[2].title}`);


const sumOfAll = jsLibrary[0].pages + jsLibrary[1].pages + jsLibrary[2].pages
console.log(`Sum of all pages in collection: ${sumOfAll}`);