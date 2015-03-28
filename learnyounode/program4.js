var fs = require('fs');

var filePath = process.argv[2];

    fs.readFile(filePath,function callback(err,buf){
            var size = buf.toString().split('\n').length-1;
            console.log(size);
     });
