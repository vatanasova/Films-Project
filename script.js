"use strict"

let moviesCnt;

function start() {
    do {
        moviesCnt = +prompt("Movies count", "");
    } while (moviesCnt == null || moviesCnt == '' || isNaN(moviesCnt))
}

start();

const personalMovieDb = {
    count: moviesCnt,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function saveMovies() {
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
}

saveMovies();

function detectPersonalLevel() {
    if (personalMovieDb.count < 10) {
        alert("Too few movies watched");
    } else if (personalMovieDb.count <= 30) {
        alert("Classical watcher");
    } else if (personalMovieDb.count > 30) {
        alert("Movie fan");
    } else {
        alert("Error occured");
    }
}

detectPersonalLevel();

const showMyDB = () => { 
    if (!personalMovieDb.private) 
        console.log({ personalMovieDb });
}

showMyDB();

const genres = [];

const writeYourGenres = () => {

    for (let i = 1; i <= 3; i ++) {
        genres[i-1] = prompt(`Your favourite genre ${i}`, '');
    }
}

writeYourGenres();

console.log({ genres });



