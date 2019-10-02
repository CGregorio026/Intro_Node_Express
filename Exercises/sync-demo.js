// in this case, line 5's console log is the last one to be ran. This is likely because the variable is already defined before needed.
    var fs = require('fs');
    var data = fs.readdirSync('../');
    console.log('data: ', data);
    console.log("This code is last");