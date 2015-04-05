var listenPort = process.argv[2]

var http = require('http')

var server = http.createServer(function (req,res) {
  // handle req,res

  //정답엔 아래 내용이 추가 되어 있군요
  if(req.method != 'GET')
    return res.end('send GET Data\n')

  res.writeHead(200, { 'Content-Type': 'application/json' })
  var url = require('url')
  var url_object = url.parse(req.url,true)

  var date = new Date(url_object.query.iso)
  var joson_rslt = ''

  if(url_object.pathname =='/api/parsetime'){
    joson_rslt = JSON.stringify( {hour : date.getHours(), minute : date.getMinutes(), second : date.getSeconds()} )
  }else{
    joson_rslt = JSON.stringify( {unixtime : date.getTime()} )
  }

  res.end(joson_rslt)

})

server.listen(listenPort)
