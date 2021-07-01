const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');


// fetchMyIP((error, ip) => {
  // if (error) {
    // console.log("It didn't work!" , error);
    // return;
  // }

  // console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP("167.100.66.132", (error) => {
  // if (error) {
    // console.log("Error: ", error);
    // return;
  // }
  // return coordinates;
// });

// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error, passTimes) => {
  // if (error) {
    // console.log("Error: ", error);
    // return;
  // }
  // console.log("Next 5 Flyover Times In Your Area: ", passTimes);
// });