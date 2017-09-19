import movies from '../data/data';

function videoViewed(strVideoName) {
  // For each movie in movies array,
  // check if movie.name matches strVideoName.
  // If true, increment movie's watch count by 1

  movies.forEach(function(movie) {
    return movie.name === strVideoName ? movie.watchCount++ : null;
  });
}

// ====== Tests
videoViewed('The Mummy');
console.log(`${movies[0].name} views: ${movies[0].watchCount}`);
videoViewed('The Mummy');
console.log(`${movies[0].name} views: ${movies[0].watchCount}`);
