var http = require('http');

// var url = 'http://www.google.com';
var url = process.argv[2];

var bl = require('bl');

//My Solution
// http.get(url,function(res){
//   res.setEncoding('utf8');
//   res.on('error',console.error);
//   res.pipe(bl(function (err, data) {
//     var count = data.toString().length;
//     console.log(count);
//     console.log(data.toString());
//   }));
// });

  //The Answer
  http.get(url,function(res){
    res.pipe(bl(function(err,data){
      if(err)
        console.err(err)
      data = data.toString();
      console.log(data.length);
      console.log(data);
    }))
  })
