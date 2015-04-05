var listenPort = process.argv[2]

var http = require('http')

var server = http.createServer(function (req,res) {
  // handle req,res

  //정답엔 아래 내용이 추가 되어 있군요
  if(req.method != 'POST')
    return res.end('send POST Data\n')

  var map = require('through2-map')
  req.pipe(map(function (chunk) {
    // return chunk.toString().split('').reverse().join('')
      return chunk.toString().toUpperCase()
  })).pipe(res)


})

server.listen(listenPort)
