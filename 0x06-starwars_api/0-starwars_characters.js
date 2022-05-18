#!/usr/bin/node
// script that prints all characters of a Star Wars Movie
const request = require('request');
const myArgs = process.argv.splice(2);
const url = 'https://swapi-api.hbtn.io/api/films/' + myArgs[0] + '/?format=json';
request.get(url, async (error, res, body) => {
  if (error) {
    console.log(error);
  } else {
    const person = JSON.parse(body).characters;
    //debugging
	  //console.log(person);
	  //console.log(person.characters);
    const personList = peopleURL => {
      const promise = new Promise((resolve, reject) => {
        request.get(peopleURL, (error, res, body) => {
          if (error) {
            reject(error);
          } else {
            resolve(body);
          }
        });
      });
      return promise;
    };
    for (let i = 0; i < person.length; i++) {
      const result = await personList(person[i]);
      console.log(JSON.parse(result).name);
   }
  }
});
