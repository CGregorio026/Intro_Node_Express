// Here, the "this code is last" line is NOT last, and actually runs before the data:. This is because the code is running asynchronously, and the code stated later in the document actually runs first.
var fs = require('fs');
   function phoneNumber(err, data) {
       console.log('data: ', data)
   }

   fs.readdir('../', phoneNumber);
   console.log("This code isn't last.");