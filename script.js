const personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: () => {
        do {
            this.count = +prompt("Movies count", "");
        } while (this.count == null || this.count == '' || isNaN(this.count))
    },
    save: () => {
        for (let i = 0; i < this.count; i ++) {

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
    },
    detectPersonalLevel: () => {
        if (this.count < 10) {
            alert("Too few movies watched");
        } else if (this.count <= 30) {
            alert("Classical watcher");
        } else if (this.count > 30) {
            alert("Movie fan");
        } else {
            alert("Error occured");
        }
    },
    showMyDB: () => {
        if (!this.private) {
            console.log({ personalMovieDb });
        }   
    },
    toggleVisibleMyDB: () => { this.private = !this.private },
    writeGenres: () => {
        // for (let i = 1; i <= 3; i ++) {

        //     do {
        //         genre = prompt(`Your favourite genre ${i}`, '');
        //     } while (genre == null || genre == "");

        //     personalMovieDb.genres[i-1] = genre;
        // }

        do {
            genres = prompt(`Your favourite genres`, '');
        } while (genres == null || genres == "");

        personalMovieDb.genres = genres.split(',');
        personalMovieDb.genres.sort();

        personalMovieDb.genres.forEach((element, index) => {
            console.log(`Favourite genre ${index+1} - ${element}`);
        });
    }
};

personalMovieDb.start();

personalMovieDb.save();

personalMovieDb.detectPersonalLevel();

personalMovieDb.showMyDB();

personalMovieDb.toggleVisibleMyDB();

personalMovieDb.showMyDB();

personalMovieDb.writeGenres();
