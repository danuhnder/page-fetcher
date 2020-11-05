const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const localPath = process.argv[3];

const goGetTheThing = function(url, localPath, done) {
  console.log('going to get it');
  request(url, (error, response, body) => {
    // console.log('error:', error); 
    // console.log('statusCode:', response && response.statusCode);
    if (response) {
      if (response.statusCode === 200){
        console.log('GOT IT');
        done(localPath, body); 
      } else console.log(`Hit a snag, bub: ${response.statusCode}, ${error}`) 
    } else console.log('check that web address again, pardner, and don\'t forget the http:// bit!')  
  });
};

const goWriteItDown = (localPath, data) => {
  if (fs.existsSync(localPath)) {
    console.log('file already exists buddy!')
  } else {
    fs.writeFile(localPath, data, (err) => {
      if(err) {
      throw err;
      }
      console.log("WROTE IT DOWN");
    });  
  }
};
 
goGetTheThing(url, localPath, goWriteItDown)

// use process.argv to get domain and local file path
// supply domain to request function
// supply local file path to fs callback



