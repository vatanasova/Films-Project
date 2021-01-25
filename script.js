const numberOfMovies = +prompt("Movies count", "");

const personalMovieDb = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const movie1 = prompt("Movie name", "");
const rating1 = prompt("Movie rating", "");

const movie2 = prompt("Movie name", "");
const rating2 = prompt("Movie rating", "");

personalMovieDb.movies[movie1] = rating1;
personalMovieDb.movies[movie2] = rating2;

console.log({ personalMovieDb });
