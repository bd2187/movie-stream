import movies from '../data/data';

function videoViewed(strVideoName) {
  // For each movie in movies array,
  // check if movie.name matches strVideoName.
  // If true, increment movie's watch count by 1

  movies.forEach(function(movie) {
    return movie.name === strVideoName ? movie.watchCount++ : null;
  });
}

function getRanking(strVideoName) {
  var ranking;

  // sorted movies array in order by watchCount

  const sortedMovieRankings = movies.sort(
    (next, prev) => prev.watchCount - next.watchCount
  );

  // For each movie in sortedMovieRankings array,
  // check if movie.name === strVideoName.
  // If true, give ranking value of index + 1.

  sortedMovieRankings.forEach(function(movie, index) {
    if (movie.name === strVideoName) {
      ranking = index + 1;
    }
  });

  return ranking;
}

// =========== Tests ===========
videoViewed('The Mummy');
console.log(`${movies[0].name} views: ${movies[0].watchCount}`);

videoViewed('The Mummy');
console.log(`${movies[0].name} views: ${movies[0].watchCount}`);

videoViewed('Rough Night');
console.log(`${movies[6].name} views: ${movies[6].watchCount}`);

videoViewed('Rough Night');
console.log(`${movies[6].name} views: ${movies[6].watchCount}`);

console.log('Baby Driver ranking:', getRanking('Baby Driver'));
console.log('All Eyez On Me ranking:', getRanking('All Eyez On Me'));
