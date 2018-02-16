var exports.apiKey = require('./../.env').apiKey;

export let promise = function(name, symptom, perPage) {
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${symptom}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&sort=best-match-asc&skip=0&limit=${perPage}&user_key=${exports.apiKey}`;

    console.log(url);
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });
};
