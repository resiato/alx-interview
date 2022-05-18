#!/usr/bin/node
const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2] + '/?format=json';
request.get(url, async (error, res, body) => {
  if (error) {
    console.log(error);
  } else {
    const person = JSON.parse(body).characters;
    const personList = peopleURL => {
      const promise = new Promise((resolve, reject) => {
        request.get(peopleURL, (error, resp, body) => {
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
