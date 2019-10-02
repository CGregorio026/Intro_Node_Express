// The console takes time for the anonymous function to run, letting the console log afterward to load prior, making the functions asynchronous.
var fs = require('fs');

  fs.readdir('../', function(err, data) {
      console.log('data: ', data)
  });

  console.log("This code still isn't last!");