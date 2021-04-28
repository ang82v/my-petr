let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

let a = prompt('Последний фильм1', '');
let b = +prompt('Оцените фильм1', '');
let c = prompt('Последний фильм2', '');
let d = +prompt('Оцените фильм2', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)