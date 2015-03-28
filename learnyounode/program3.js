
var fs = require('fs');

var filePath = process.argv[2];

// '/Users/oban2jin/Documents/node.js/node/learnyounode/program2.js';

var buf = fs.readFileSync(filePath);

// console.log(buf);

var lines = buf.toString().split('\n');

 var rstArray =  buf.toString().split('\n');
// var line = rstArray.length - 1;

// for(var i =0 ; i < rstArray.length ; i++){
//   console.log('rstlArray['+i+']=' + rstArray[i]);
//   console.log(rstArray[i]);
// }
//
 console.log(lines);
