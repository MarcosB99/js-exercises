const movies = [

];
let isTrue = false;

do {
    let movieName = prompt("Enter the name of the movie:");
    let inputRating = prompt("Enter the movie rating of IMDB:");

    if (!movieName || !inputRating) {
        if (movies.length === 0) {
            console.log(`No movies were added to the array.`);
        } else {
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].imdb < 7) {
                    console.log(`The list of movies with a rating below 7 added are:`);
                    for (let movie of movies) {
                        console.log(`${movie.title} (${movie.imdb})`);
                    }
                }
            }
        }
        isTrue = true;
    } else {
        let movieRating = Number(inputRating);

        if (Number.isNaN(movieRating)) {
            console.log(`Please enter a valid number for the rating. Reload the screen.`);
        } else {
            movies.push({ title: movieName, imdb: movieRating });
        }
    }
} while (!isTrue);