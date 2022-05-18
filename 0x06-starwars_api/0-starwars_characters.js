#!/usr/bin/node
const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2] + '/?format=json';
request.get(url, async (error, res) {
  if (error) console.log(error);
  else {
    const person = JSON.parse(res.body);
    film(list.characters, 0);
  }
  });
const film = (person, index) => {
   request.get(person[index], (error, res, body) => {
    if (error) throw error;
    const result = JSON.parse(body);
    console.log(result.name);
    if (index < person.length - 1) {
      Execute(person, index + 1);
    }
  });
};
