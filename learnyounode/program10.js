var listenPort = process.argv[2]

var net = require('net')

function zeroFill(i){
  return (i<10 ? '0' : '') + i
}

var server = net.createServer(function (socket){
  //socket handle logic
      var date = new Date()
      var data = date.getFullYear() + '-' +
                 zeroFill(date.getMonth()+1) + '-' +
                 zeroFill(date.getDate()) + ' ' +
                 zeroFill(date.getHours()) + ':' +
                 zeroFill(date.getMinutes())

  socket.write(data + '\n')

  socket.end()

})

server.listen(listenPort)
