#!/usr/bin/node
// script that prints all characters of a Star Wars Movie
const argv = process.argv[2];
const urlFilm = "https://swapi-api.hbtn.io/api/films/";
const urlMovie = `${urlFilm}${argv[2]}/`;

const { exit } = require('process');
const request = require("request");

if (argv === undefined) {
  exit();
}

request(urlMovie + argv, (error, response, body) => {
  if (error == null) {
    const fbody = JSON.parse(body)
    const characters = fbody.characters;
    printIt(characters, 0);
  } else {
    console.log(error);
  }
});

function printIt(characters, n) {
  if (n === characters.length) {
    return;
  }
  request(characters[n], (error, response, body) => {
    if (!error) {
      const rbody = JSON.parse(body);
      const name = rbody.name;
      console.log(name);
      printIt(characters, n + 1);
    } else {
      console.error("error:", error);
    }
  });
}
