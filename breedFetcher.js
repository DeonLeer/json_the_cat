const request = require('request');
const breed = process.argv[2];
console.log(breed);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (data[0]) {
    const desc = data[0].description;
    console.log(desc);
  } else {
    console.log("Breed not found");
  }
});
