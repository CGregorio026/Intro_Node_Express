// this code never seems to be able to run the code in the data1.json file. It may be due to the use of the readFile function? more testing seems to be needed.
var fs = require('fs');

fs.readFile('./data1.json', 'utf-8', function(err, data) {
    console.log(data);
    data = JSON.parse(data);
    console.log(data.name);
  });