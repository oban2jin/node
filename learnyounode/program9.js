var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]

var url_list = [url1 , url2, url3 ]
var url_res = []

var http = require('http')
var bl = require('bl')

var index = 0;

  for(var i=0 ; i< url_list.length ; i++){
    http.get(url_list[i],function(res){
      res.pipe(bl(function(err,data){
        if(err)
          console.error(err)

        // url_res.push(data.toString())
        url_res[index] = data.toString()
        index++

        if(index==3)
          callback()
      }))
    })
  }

 function callback(){
  //  console.log(url_origin)
   if(url_res.length == 3){
     for(var i=0; i< url_res.length ; i++){
       console.log(url_res[i])
     }
    //  url_res.forEach(function(contents){
    //    console.log(contents)
    //  })
    // console.log(url_res[2])
    // console.log(url_res[0])
    // console.log(url_res[1])
   }
 }
