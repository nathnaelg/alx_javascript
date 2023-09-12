#!/usr/bin/node
// script that prints all characters of a Star Wars movie

const req = require('request');

req.get('https://swapi-api.hbtn.io/api/films/' + process.argv[2], function (error, res, body) {
  if (error) {
    console.log(error);
  }
  const data = JSON.parse(body);
  const dd = data.characters;
  for (const i of dd) {
    req.get(i, function (error, res, body1) {
      if (error) {
        console.log(error);
      }
      const data1 = JSON.parse(body1);
      console.log(data1.name);
    });
  }
});
