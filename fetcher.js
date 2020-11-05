const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const localPath = process.argv[3];

const goGetTheThing = function(url, localPath, done) {
  console.log('going to get it');
  request(url, (error, response, body) => {
    console.log('error:', error); 
    console.log('statusCode:', response && response.statusCode); 
    goWriteItDown(localPath, body); // Print the HTML for the Google homepage.)
  });
};

const goWriteItDown = (localPath, data) => fs.writeFile(localPath, data, (err) => {
  if(err) {
    throw err;
  }
  console.log("WE GOT IT");
});
 
goGetTheThing(url, localPath)

// use process.argv to get domain and local file path
// supply domain to request function
// supply local file path to fs callback



