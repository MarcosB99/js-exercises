const movies = [
    {
        title: "Last Day on Earth",
        imdb: 5.5
    }
];
let isTrue;

do {
    let movieName = prompt("Enter the name of the movie:");
    let movieRating = Number(prompt("Enter the movie rating of IMDB:"));

    if (!movieName || !movieRating) {
        if (movies.length === 0) {
            console.log(`No movies were added to the array.`);
            isTrue = true;
        } else {
            console.log(`The list of movies added are:`);
            for (let movie of movies) {
                console.log(`${movie.title} (${movie.imdb})`);
            }
        }
    }
} while (!isTrue);