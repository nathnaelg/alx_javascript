#!/usr/bin/node
// prints the number of movies where the character “Wedge Antilles” is present.

const request = require('request');

request(process.argv[2], function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    const movies = JSON.parse(body).results;
    let count = 0;
    for (const m in movies) {
      const move = movies[m].characters;
      for (const charIndex in move) {
        if (move[charIndex].includes('18')) {
          count++;
        }
      }
    }
    console.log(count);
  } else {
    console.log('An error occured. Status code: ' + response.statusCode);
  }
});
