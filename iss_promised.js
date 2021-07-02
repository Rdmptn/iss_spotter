const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(body) {
  let ip = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${ip}`);
};

const fetchISSFlyOverTimes = function(coords) {
  const coordinates = { Latitude: JSON.parse(coords).latitude, Longitude: JSON.parse(coords).longitude};
  return request(`http://api.open-notify.org/iss/v1/?lat=${coordinates.Latitude}&lon=${coordinates.Longitude}`);
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(data => {
    const { response } = JSON.parse(data);
    return response;
  });
}

module.exports = { nextISSTimesForMyLocation };
