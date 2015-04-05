var listenPort = process.argv[2]
var filePath = process.argv[3]

var http = require('http')

var server = http.createServer(function (req,res) {
  // handle req,res

  //정답에 아래 한줄이 추가 되어 있군요
  res.writeHead(200, { 'content-type': 'text/plain' })
  
  var fs = require('fs')
  var rs = fs.createReadStream(filePath)

  rs.pipe(res)

})

server.listen(listenPort)
