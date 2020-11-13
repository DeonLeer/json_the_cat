const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      callback(error, null);
    } else if (data[0]) {
      const desc = data[0].description;
      callback(null, desc);
    } else {
      callback(null, null);
    }
  })
}

module.exports = { fetchBreedDescription };