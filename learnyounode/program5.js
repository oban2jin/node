
var filePath = process.argv[2];
var fileExt = process.argv[3];

// console.log(filePath+'//'+fileExt);

// 마이 솔루션
var fs = require('fs');

// fs.readdir(filePath.toString(),function (err,list){
//   var countForFileExt = 0;
//   for(var i=0;i<list.length;i++){
//       var path = require('path');
//       if(path.extname(list[i]) == '.'+fileExt){
//           countForFileExt ++;
//           console.log(list[i]);
//       }
//   }
//   // console.log(countForFileExt);
// });


//정답
// Array.forEach Method
//
fs.readdir(filePath,function(err,list){
  list.forEach(function(file){
    var path = require('path');
    if(path.extname(file)==='.'+fileExt)
      console.log(file);
  });
})
