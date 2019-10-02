var fs = require('fs');

// var jsonString = '{ "name": "Joe"}';
// best practice
var jsonString = {
    name: 'Joe'
};

fs.writeFile('data2.json', JSON.stringify(jsonString), function(err) {
    if (err) {
        console.log(err);
    }
});