import movies from '../data/data';

// sort movies array in order by watchCount
// this array will be used by getRanking and getTopVidoes functions

const sortedMovieRankings = movies
  .slice() // use .slice() without parameters to create copy of of movies array
  .sort((next, prev) => prev.watchCount - next.watchCount);

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

function getTopVideos() {
  // Create new array which adds
  // ranking property to each object
  // from sortedMovieRankings.
  // Return array of top ten moives

  return sortedMovieRankings
    .map(function(movie, index) {
      return { ...movie, ranking: index + 1 };
    })
    .slice(0, 10);
}

// =========== Tests displayed in browser console ===========
videoViewed('Iron Man');
console.log(`${movies[0].name} views: ${movies[0].watchCount}`);

videoViewed('Iron Man');
console.log(`${movies[0].name} views: ${movies[0].watchCount}`);

videoViewed('Iron Man');
console.log(`${movies[0].name} views: ${movies[0].watchCount}`);

videoViewed('Thor');
console.log(`${movies[3].name} views: ${movies[3].watchCount}`);

videoViewed('Thor');
console.log(`${movies[3].name} views: ${movies[3].watchCount}`);

console.log('Doctor Strange:', getRanking('Doctor Strange'));
console.log('Ant-Man:', getRanking('Ant-Man'));
console.log('Iron Man 3 ranking:', getRanking('Iron Man 3'));

console.log('Top 10 Vidoes:', getTopVideos());
