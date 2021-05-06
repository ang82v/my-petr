'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start() {
    personalMovieDB.count = +prompt('Сколько мувиков посмотрели?', '');
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько мувиков посмотрели?', '');
    }
  },
  rememberMyFilms() {
    const a = prompt('Один из просмотренных последних фильмов?', ''),
      b = prompt('Ваша оценка?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done')
    } else {
      console.log('Error...');
      i--;
    }
  },
  detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено маловато...')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Видно что любишь кино');
    } else if (personalMovieDB.count >= 30) {
      console.log('Ты КИНОМАН!!!');
    } else {
      console.log('Упсссс...');
    }
  },
  showMyDB(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres() {
    for (let i = 1; i < 2; i++) {
      // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

      // if (genre === '' || genre == null) {
      //   console.log('Некорректные данные');
      //   i--;
      // } else {
      //   personalMovieDB.genres[i - 1] = genre;
      // }
      let genre = prompt(`Введите жанры через запятую`);
      if (genre === '' || genre == null) {
        console.log('Некорректные данные');
        i--;
      } else {
        personalMovieDB.genres = genre.split(', ');
        personalMovieDB.genres.sort();
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр №${i + 1} - это ${item}`);
    })
  },
  toogleVisibleMyDB() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  }

}

