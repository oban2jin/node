
var mymodule = require('./mymodule.js');

mymodule(process.argv[2],process.argv[3],function(err,list){
    list.forEach(function(file){
      if(file !== '')
        console.log(file);
    });
});
