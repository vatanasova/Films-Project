"use strict"

const moviesCnt = +prompt("Movies count", "");

const personalMovieDb = {
    count: moviesCnt,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < moviesCnt; i ++) {

    let movieName = "";
    let movieRating = "";

    // do {
    //     movieName = prompt("Movie name", "");
    // } while (movieName == null || movieName == "" || movieName.length > 50);

    while (movieName == null || movieName == "" || movieName.length > 50) {
        movieName = prompt("Movie name", "");
    }
    
    while (movieRating == null || movieRating == "") {
        movieRating = +prompt("Movie rating", "");
    } 

    personalMovieDb.movies[movieName] = movieRating;
}

if (personalMovieDb.count < 10) {
    alert("Too few movies watched");
} else if (personalMovieDb.count <= 30) {
    alert("Classical watcher");
} else if (personalMovieDb.count > 30) {
    alert("Movie fan");
} else {
    alert("Error occured");
}

console.log({ personalMovieDb });
