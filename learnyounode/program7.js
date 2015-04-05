var url = process.argv[2];
var contents = '';


// To do List
// Using HTTP Object Get Response From url
  contents = 'get response from :' + url;

// My Solution
  // var http = require('http');
  // http.get(url,function(res){
  //   // console.log('res.statusCode:'+res.statusCode);
  //   res.on('data',function(data){
  //     // Print the Response Contents line by line
  //     console.log(data.toString());
  //   });
  // }).on('error',function(e){
  //   console.log('Error Message:'+e.message);
  // });

//The Answer
  var http = require('http');
  http.get(url,function(res){
    res.setEncoding('utf8');
    res.on('error',console.error);
    res.on('data',console.log);
  });
