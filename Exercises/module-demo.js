var myModule = require('./my-module.js');
// runs the code from the my-module file due to being exported from the my-module file.
console.log('Text from the external module: ', myModule.myText);