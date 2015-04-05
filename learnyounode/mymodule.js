
module.exports = function (filePath,extName,callback){

  var fs = require('fs');
  var path = require('path');

  fs.readdir(filePath,function(err,list){
    if(err)
      return callback(err,null);

  //My Soultion
    // var filelist = [];
    // var i = 0;
    //
    // list.forEach(function(file){
    //
    //   if(path.extname(file) === '.' + extName){
    //     filelist.push(file);
    //     i++;
    //   }
    // });
    //
    // callback(null,filelist);

    // The Answer
    list = list.filter(function(file){
      return path.extname(file) === '.'+ extName;
    });

    callback(null,list);
  });

}
