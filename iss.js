const request = require('request');

const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request('https://api.ipify.org?format=json', (error, response, body) => {
    
    if (error) {
      callback(error, null);
      return;
    }
  
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    
    let ipAddress = JSON.parse(body).ip;
    callback(null, ipAddress);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    
    const coordinates = { Latitude: JSON.parse(body).latitude, Longitude: JSON.parse(body).longitude};
    callback(null, coordinates);
  });
};

const fetchISSFlyOverTimes = function(coords, callback) {
  request(`http://api.open-notify.org/iss/v1/?lat=${coords.Latitude}&lon=${coords.Longitude}`, (error, response, body) => {
    
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching ISS pass times: ${body}`;
      callback(Error(msg), null);
      return;
    }
    
    const passOvers = JSON.parse(body).response;
    callback(null, passOvers);
  });
};

const nextISSTimesForMyLocation = function(callback) {
  fetchMyIP((error, ipAddress) => {
    if (error) {
      callback(error, null);
      return;
    }
    fetchCoordsByIP(ipAddress, (error, coordinates) => {
      if (error) {
        callback(error, null);
        return;
      }
      fetchISSFlyOverTimes(coordinates, (error, passOvers) => {
        if (error) {
          callback(error, null);
          return;
        }   
        callback(null, passOvers);
      });
    });
  });
}

module.exports = { nextISSTimesForMyLocation };